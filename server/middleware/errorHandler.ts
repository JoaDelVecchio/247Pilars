import { NextFunction,Request,Response } from "express";
import AppError from "../lib/AppError";

const errorHandler = (err:unknown,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        console.error(err.message);
        res.status(err.status).json(err.message);
    }

    console.error(`Unexpected error:`,err);
    res.status(500).json("Internal Server Error");
}

export default errorHandler;
