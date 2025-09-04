import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected Successfully");
    } catch (error)
    {
        console.error("Database connection failed", error.message);
        throw error;
    }
}