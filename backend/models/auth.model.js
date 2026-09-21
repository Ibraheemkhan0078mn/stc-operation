import mongoose from "mongoose";



let authSchema=mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})



let authModel=mongoose.model("auth", authSchema)

export default authModel