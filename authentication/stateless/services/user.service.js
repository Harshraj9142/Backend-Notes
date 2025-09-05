import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";


export const registerUser = async(username, password) =>{
    const hasedPassword = await bcrypt.hash(password, 10);

    const user = new User({username, password:hasedPassword});

    return await user.save();
}

export const loginUser = async(username, password) =>{
        
}

export const logoutUser = async(username, password) =>{}
