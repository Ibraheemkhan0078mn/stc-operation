import express from 'express'
let router= express.Router()
import {createMember, deleteMember, findAllMembers, findOneMember, UpdateMember} from '../controllers/member.controller.js'










router.post("/memberCreate", createMember )
router.post("/memberUpdate", UpdateMember)
router.post("/memberDelete", deleteMember)
router.get("/getAllMembers", findAllMembers)
router.post("/findOneMember", findOneMember)



export default router;