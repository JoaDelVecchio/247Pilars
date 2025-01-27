import { Response,NextFunction } from "express";
import { IAuthRequest } from "../types/express";

export const createWorkout = async (req:IAuthRequest,res:Response,next:NextFunction)=>{
    try {
        console.log('You are authenticated');
        res.status(200).json({message:"You are authenticated"});
        
    } catch (error) {
        next(error);
    }
}