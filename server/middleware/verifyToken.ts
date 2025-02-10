import { NextFunction,Request,Response } from "express";
import { JWT_SECRET_KEY } from "../config";
import { IAuthRequest } from "../types/express";
import AppError from "../lib/AppError";
import jwt from 'jsonwebtoken'

const verifyToken = (req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token;
        if(!token) throw new AppError('You are not authenticated',403);

jwt.verify(token,JWT_SECRET_KEY,(err:any,payload:any)=>{
            if(err) {
                console.error(`Error: ${err}`)
                throw new AppError('Token not valid',403)
            }
            (req as IAuthRequest).userId  = payload.id;
            next();
        })
    } catch (error) {
        next(error)
    }
}

export default verifyToken