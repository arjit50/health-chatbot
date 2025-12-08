import mongoose from "mongoose";
import Auth from "../models/auth.models";
import bcrypt from 'bcrypt';

export const signup = async (req,res)=>{
    try{
        const{name,email,password} = req.body;
        const findUserByEmail = await Auth.findOne({email});
        if(findUserByEmail) return res.status(400).json({message:"User Already Exists"});

        const hashedPassword = await bcrypt.hash(password,10);

        let user = await Auth.create({name,email,password:hashedPassword});
        return res.status(201).json({message:"User Registered Successfully"});

    }catch(err){
        console.log("user signUp error",err);
        return res.status(400).json({message:"Internal Server Error"});
    }
}

export const login = ()=>{
    try{
        const{email,password} = req.body;
        const findUserByEmail = Auth.find({email})
        if(!findUserByEmail) return res.status(400).json({message:"User Not Exists"})
        
    }catch(err){
        console.log("user login error",err);
        return res.status(400).json({message:"Internal Server Error"});
    }
}