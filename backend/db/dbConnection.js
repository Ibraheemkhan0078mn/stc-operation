import mongoose from "mongoose";
import dns from 'dns'
import dotenv from 'dotenv'
dotenv.config()




async function dbConnection(){
  try {
    dns.setServers(["8.8.8.8"])
      await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "stc-operator"
      })
    console.log("Mongodb is connected. ")
  } catch (error) {
    console.log(error)
  }
}



export default dbConnection