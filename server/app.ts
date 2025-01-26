import express from 'express';
import { CLIENT_ORIGIN_URL, PORT } from './config';
import connectDB from './config/db';
import cors from 'cors'
const app = express();

// Connect to DB
connectDB();

//Cors Policy
app.use(cors({
    origin:CLIENT_ORIGIN_URL,
    credentials:true
}))

//Parser Middleware
app.use(express.json());




app.get('/', (req, res) => {

  res.json({ msg: 'hi' });
});

app.listen(PORT, () => {
  console.log(`Server running on port 8000`);
});
