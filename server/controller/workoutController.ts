import { Response,NextFunction } from "express";
import { IAuthRequest } from "../types/express";
import AppError from "../lib/AppError";
import { Workout } from "../models/Workout";
import mongoose from "mongoose";

export const getWorkouts = async (req:IAuthRequest,res:Response,next:NextFunction)=>{

    try {
        const userId = req.userId
        if(!userId) throw new AppError('Missing Identifier', 500);

        const workouts = await Workout.find({userId});

        if(!workouts.length) throw new AppError("No Workouts found for this user",404)
        
        console.log("Fetched workouts succesfully",workouts)
        res.status(200).json(workouts)
        
    } catch (error) {
        next(error);
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
   res.status(201).json(savedWorkout)
        
    } catch (error) {
        next(error);
    }
}



// export const createWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
//     try {
//         console.log('You are authenticated');
//         res.status(200).json({message:"You are authenticated"});
        
//     } catch (error) {
//         next(error);
//     }
// }
// export const updateWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
//     try {
//         console.log('You are authenticated');
//         res.status(200).json({message:"You are authenticated"});
        
//     } catch (error) {
//         next(error);
//     }
// }
// export const deleteWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
//     try {
//         console.log('You are authenticated');
//         res.status(200).json({message:"You are authenticated"});
        
//     } catch (error) {
//         next(error);
//     }
// }