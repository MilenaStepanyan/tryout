import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
dotenv.config()
const app = express()
app.use(express.json())
app.get("/api/",(req,res)=>{
    res.json({message: "Hello from Backend"})
})
const PORT = 3011 
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
