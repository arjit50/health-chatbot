import bcrypt from 'bcrypt'
import User from '../models/user.model';

export const signup = async (req,res)=>{
    const {name,email,password} = req.body;

    let findUserByEmail = await User.findOne({email});
    if(findUserByEmail) return res.status(400).json({message:"User Already Exists"});

    const hashedPassword = await bcrypt.hash(password,10);

    let user = await User.create({email,password,password:hashedPassword});


}