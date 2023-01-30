import express from 'express';
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import './connection.js';
import emiRouter from "./routes/emiRoute.js";

const app = express();

const port = process.env.PORT || 4500;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/home', userRouter);
app.use('/emi', emiRouter)

app.listen(port, ()=>{
    console.log(`server Statred at ${port}`);
})