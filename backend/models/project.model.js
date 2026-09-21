import mongoose from 'mongoose'



let projectSchema=mongoose.Schema({
    name: String,
    customerName: String, 
    image: String, 
    notes: String
})



let projectModel=mongoose.model("projects", projectSchema)


export default projectModel