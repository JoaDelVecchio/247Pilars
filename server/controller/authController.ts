import { Request,Response,NextFunction } from "express"
import { JWT_SECRET_KEY } from "../config";
import AppError from "../lib/AppError";
import bcrypt from 'bcryptjs'
import User from "../models/User";
import jwt from 'jsonwebtoken'

export const register =async (req:Request,res:Response,next:NextFunction)=>{
    const {username,password,email} = req.body;
    try {
        if(!username || !password || !email) throw new AppError("Missing fields, try again!",400);

        const isDuplicated = await User.findOne({email});

        if(isDuplicated) throw new AppError("Email already in use",400);

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({username,email,password:hashedPassword});
        await newUser.save()
        console.log("User created succesfully")
        res.status(201).json("User created succesfully")
    } catch (error) {
        next(error);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) throw new AppError("Missing fields, try again!", 400);
        
        const user = await User.findOne({ username });
        if (!user) throw new AppError("Invalid Credentials", 403);

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) throw new AppError("Invalid Credentials", 403);

        const age = 7 * 24 * 60 * 60 * 1000; // 7 days expiration
        const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, { expiresIn: age });

        // ✅ FIX: Allow the cookie to be accessible cross-site
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // ✅ Only secure in production
            sameSite: 'None' as 'None' // ✅ Required for cross-origin authentication
        });

        res.status(200).json(user);
        console.log("✅ Logged in successfully");

    } catch (error) {
        next(error);
    }
};

export const logout = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log("Logout sucessfull");
        res.clearCookie('token',{httpOnly:true}).status(200).json("Logout Succesfull");
    } catch (error) {
        next(error)
    }
}