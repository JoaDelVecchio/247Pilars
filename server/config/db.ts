import mongoose from 'mongoose'
import { MONGO_URI } from '.'

const connectDB = async()=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to MongoDB succesfully') 
    } catch (error) {
        console.error('Failed connecting to MongoDB', error)
        process.exit(1)
    }
}

export default connectDB