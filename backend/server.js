import express from 'express'
import cors from 'cors'
let app = express()
import authRoutes from './routes/auth.route.js'
import projectRoutes from './routes/project.route.js'
import dbConnection from './db/dbConnection.js'
dbConnection()
import cookieParser from 'cookie-parser'
import dotEnv from 'dotenv'
dotEnv.config()
import memberRoutes from './routes/member.route.js'


app.use(cookieParser())
app.use(cors({
    origin: process.env.Frontend_URL,
    credentials: true
}))
app.use(express.json())





app.get("/", async function (req, res) {
    return res.json("Your backend is working")
})



app.use("/auth", authRoutes)
app.use("/projects", projectRoutes)
app.use("/member", memberRoutes)




app.listen(4000, function () {
    console.log("The server is running")
})