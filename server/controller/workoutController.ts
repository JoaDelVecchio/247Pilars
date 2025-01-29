import { Response,NextFunction, application } from "express";
import { IAuthRequest } from "../types/express";
import AppError from "../lib/AppError";
import { Workout } from "../models/Workout";
import mongoose from "mongoose";

export const getWorkouts = async (req:IAuthRequest,res:Response,next:NextFunction)=>{

    try {
        const userId = req.userId
        if(!userId) throw new AppError('Missing Identifier', 400);

        const workouts = await Workout.find({userId});

        if(!workouts.length) throw new AppError("No Workouts found for this user",404)
        
        console.log("Fetched workouts succesfully",workouts)
        res.status(200).json({workouts})

    } catch (error) {
        next(error);
    }
}

export const getWorkout = async(req:IAuthRequest,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id

        const workout = await Workout.findById({id})

        if(!workout) throw new AppError("Workout not found",404)

        console.log("Workout found",workout)
        res.status(200).json({workout})
        
    } catch (error) {
        next(error)
    }
}

export const createWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
    try {
    const userId = req.userId
    
    if(!userId) throw new AppError('Missing Identifier', 500);



    const {title,dayOfWeek,exercises} = req.body

    if(!title || !dayOfWeek || !exercises) throw new AppError('Missing fields', 400);

    const newWorkout = new Workout({
        userId,
        title,
        dayOfWeek,
        exercises
    })

    console.log("Workout presaving", newWorkout)

   const savedWorkout = await newWorkout.save()

   console.log("Workout postsaving", savedWorkout)
   res.status(201).json({savedWorkout})
        
    } catch (error) {
        next(error);
    }
}



export const updateWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;

        if(!id) throw new AppError("Missing identifier",400);

        const {title,dayOfWeek,exercises} = req.body;

        if (!title && !dayOfWeek && !exercises) throw new AppError("At least one field should be completed",400);

        const updates = {
            ...(title && {title}),
            ...(dayOfWeek && {dayOfWeek}),
            ...(exercises && {exercises}),
        }

        const updatedWorkout = await Workout.findByIdAndUpdate(
            id,
            updates,
            {new:true}
        )

        if(!updatedWorkout) throw new AppError('Workout not found',404);

        console.log("Updated workout",updatedWorkout);
        res.status(200).json({updatedWorkout})
        
    } catch (error) {
        next(error);
    }
}
export const deleteWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;

        if(!id) throw new AppError("Missing identifier",400);

        const deletedWorkout = await Workout.findByIdAndDelete(id)

        if(!deletedWorkout) throw new AppError("Could not find that workout",404);

        console.log("Workout deleted. workout:",deletedWorkout)
        res.status(200).json(deletedWorkout);
        
    } catch (error) {
        next(error);
    }
}
