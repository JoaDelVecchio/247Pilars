import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { CLIENT_ORIGIN_URL, PORT } from './config';
import connectDB from './config/db';
import authRouter from './routes/authRoute';
import progressRouter from './routes/progressRoutes'
import fuelRouter from './routes/fuelRoute'
import workoutRouter from './routes/workoutRoute'
import errorHandler from './middleware/errorHandler';
import notFound from './middleware/notFound';
const app = express();

// Connect to DB
connectDB();

//Parser Middleware
app.use(express.json());
app.use(cookieParser())
//Cors Policy
app.use(cors({
    origin:CLIENT_ORIGIN_URL,
    credentials:true
}))


//Routes
app.use('/api/auth',authRouter)
app.use('/api/fitness/workouts',workoutRouter)
app.use('/api/fitness/fuel',fuelRouter)
app.use('/api/fitness/progress',progressRouter)

//Error Handler
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running on port 8000`);
});
