import mongoose, { Schema, Document } from 'mongoose';

// 1. Define the User Interface
export interface IUser extends Document {
  email: string;     // User's email
  username:string;   // User's Username
  password: string;  // User's password
}

// 2. Define the User Schema
const userSchema: Schema<IUser> = new Schema(
  {
      email: {
        type: String,
        required: [true, 'Email is required'], 
        unique: true,                          
        trim: true,                           
        lowercase: true,                      
      },
    username:{
        type:String,
        required:[true,'Username is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'], // Ensure password is provided
    },
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// 3. Create and Export the Model
const User = mongoose.model<IUser>('User', userSchema);
export default User;
