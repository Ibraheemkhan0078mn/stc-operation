import mongoose from "mongoose"


let memberSchema=   mongoose.Schema({
    name: String,
    image: String,
    phoneNo : Number,
    post: String, 
    address: String
})




let memberModel= mongoose.model("member", memberSchema)
export default memberModel;