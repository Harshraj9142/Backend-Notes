import mongoose from "mongoose";

const userSchema = new mongoose.connect.userSchema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true})

export const User = mongoose.model("User", userSchema);