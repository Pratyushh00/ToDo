import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/database.js';
import userRoute from './routes/user.js';
import bodyParser from 'body-parser';
import todoRouter from './routes/todo.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();
connectDB(); // Connect Mongo DB

// MiddleWare
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// Api Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/todo', todoRouter);

// Creating Server
const port = process.env.PORT || 3000;
app.listen(8000, () => {
    console.log(`Server listening at ${port}`);
});