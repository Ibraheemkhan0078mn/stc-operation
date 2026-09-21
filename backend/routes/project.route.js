import express from 'express'
import projectModel from '../models/project.model.js'
import upload from '../middlewares/multer.middleware.js'
let router= express.Router()


 


router.post("/projectCreate", upload.single("image"), async (req,res)=>{

    let project=await projectModel.create({...req.body, image: req.file.path})
    if(project){
        return res.json({success: true, msg: "The project is created", project: project})
    }
    return res.json({success: false, msg: "something went worng in project creation. "})
})



router.get("/getAllProjects", async (req,res)=>{
    let projects=await projectModel.find()
    if(projects){
        return res.json({success: true, msg: "The project is created", projects: projects})
    }
    return res.json({success: false, msg: "something went worng in project creation. ", projects: []})
})



router.post("/getOneProject", async (req,res)=>{
    let project=await projectModel.findOne({_id: req.body.id})
    if(project){
        return res.json({success: true, msg: "The project is created", project: project})
    }
    return res.json({success: false, msg: "something went worng in project creation. "})
})




router.post("/deleteProject", async (req,res)=>{
    let project=await projectModel.findOneAndDelete({_id: req.body.id})
    if(project){
        return res.json({success: true, msg: "The project is created", project: project})
    }
    return res.json({success: false, msg: "something went worng in project creation. "})
})


router.post("/updateProject", async (req,res)=>{
        console.log(req.body, "the error")

    let project=await projectModel.findOneAndUpdate({_id: req.body.id}, req.body)
    if(project){
        return res.json({success: true, msg: "The project is created", project: project})
    }
    return res.json({success: false, msg: "something went worng in project creation. "})
})




export default router