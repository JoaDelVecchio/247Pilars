import {Response,Request, NextFunction } from "express"
import AppError from "../lib/AppError"

const notFound = (req:Request,res:Response,next:NextFunction)=>{
    next(new AppError('Page not found',404));
}


export default notFound
