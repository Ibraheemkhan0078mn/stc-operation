import memberModel from "../models/member.model.js"








async function createMember(req, res) {

    let { name, phoneNo, post, address } = req.body



    let existingMember = await memberModel.findOne({ phoneNo: phoneNo })
    if (existingMember) {
        return res.json({ success: true, msg: "The member on this phoneNo is already present. " })
    }

    await memberModel.create({
        name,
        phoneNo,
        post,
        address
    })

    return res.json({ success: true, msg: "the api is working" })
}








async function UpdateMember(req, res) {
    let { id, name, phoneNo, post, address } = req.body



    let existingMember=await memberModel.findOne({_id: id})
    if(!existingMember){
        return res.json({success: false, msg: "The member is not found"})
    }

    await memberModel.findOneAndUpdate({
        _id: id
    },
        {
            name,
            phoneNo,
            post,
            address
        })
    return res.json({ success: true, msg: "the api is working" })

}















async function findOneMember(req,res){
    let {id}=req.body
   let member= await memberModel.findOne({_id: id})

   if(!member){
    return res.json({success: false, msg: "The member is not found"})
   }

   return res.json({success: true, msg: "The member is found", member: member})
}











async function findAllMembers(req,res){
let allMembers=await memberModel.find()
return res.json({success: true, msg: "The data is here", members: allMembers})
}










async function deleteMember(req,res){
    let {id}= req.body
   let deletedmember= await memberModel.findOneAndDelete({_id: id})
    return res.json({success: true, msg: "the member is deleted"})
}
















export {
    createMember,
    UpdateMember,
    findOneMember,
    findAllMembers,
    deleteMember
}