import express from 'express'
import authModel from '../models/auth.model.js'
let router = express.Router()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'







router.post("/registration", async (req, res) => {
    let dataObj = req.body

    let existingData = await authModel.findOne({ email: dataObj.email })
    if (existingData) {
        return res.json({ success: false, msg: "The email is already present" })
    }

    let hashPassword = await bcrypt.hash(dataObj.password, 10)

    let userData = await authModel.create({
        name: dataObj.name,
        email: dataObj.email,
        role: dataObj.role,
        password: hashPassword
    })




    let data={
        id: userData._id,
        role: userData.role
    }


    let enc= jwt.sign(data, "zuhran123")
    res.cookie("stc-operator", enc)

   


    return res.json({ success: true, msg: "The auth is successfull" })
})





router.post("/login", async (req, res) => {
    let dbUserData = await authModel.findOne({ email: req.body.email, role: req.body.role })
    if (!dbUserData) {
        return res.json({ success: false, msg: "The email and role is not found for some user." })
    }

    let hashPassword = dbUserData.password
    let normalPassword = req.body.password
    let result = await bcrypt.compare(normalPassword, hashPassword)

    


    if (result == false) {
        return res.json({ success: false, msg: "The password is not correct." })
    } else {

        let loginData= {
            id: dbUserData._id,
            role: dbUserData.role
        }
       let encData= jwt.sign(loginData, "zuhran123")
       res.cookie("stc-operator", encData)
        return res.json({ success: true, msg: "You are loggedIN" })
    }


})

















router.get("/adminCheck", async (req, res) => {
   let tokenEnc= req.cookies?.["stc-operator"]
   if(!tokenEnc){
    return res.json({success: false, msg: "The token is not found"})
   }



   try {
     let result=  jwt.verify(tokenEnc, "zuhran123")

     if(result.role !== "admin"){
        return res.json({success: false, msg: "The role is not admin in this token"})
     }



     return res.json({success: true, msg: "The user is correctly admin"})
   } catch (error) {
    return res.json({success: false, msg: "the token or password of token is not correct."})
   }

})











router.get("/employeeCheck", async (req,res)=>{
   let token= req.cookies?.["stc-operator"]
   if(!token){
    return res.json({success: false, msg: "THe token is not found"})
   }


try {
    
  let dataObj= jwt.verify(token, "zuhran123")
  if(dataObj.role !== "employee"){
    return res.json({success: false, msg: "You are not employee"})
  }


  return res.json({success: true, msg :"You are login as employee"})
} catch (error) {
    return res.json({success: false, msg:"Your token or password on token is not correct"})
}
})



export default router