import { NextFunction,Request,Response } from "express";
import AppError from "../lib/AppError";

const errorHandler = (err:unknown,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        console.error(err.message);
        res.status(err.status).json({message:err.message});
        return;
    }

    console.error(`Unexpected error:`,err);
    res.status(500).json({message:"Internal Server Error"});
    next();
}

export default errorHandler;
