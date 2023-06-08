import express from "express";
import dotenv from "dotenv"
import mongoose from 'mongoose';
import userRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'

const app=express()
dotenv.config()

const connect=async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Mongo")
  }
   catch (error) {
   throw error;
  }
};

app.use(express.json())

app.use("/api/user",userRoute)
app.use("/api/room",roomsRoute)


app.get("/",(req,res)=>{
    res.send("Welcome to my Hotel Api")
})



connect().then(()=>{
app.listen(8800,()=>{
    console.log("Connected to Backend");
})})
.catch((err)=>{
    console.log(err);
})