import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        reqiured:true
    }
})

let Auth = mongoose.model("User",userSchema)

export default Auth;