import mongoose from 'mongoose'

export async function connectDB(){
    try {
       const connected= await mongoose.connect(process.env.MONGO);
       if(connected){
        console.log("Mongo is connected")
       }
      } catch (error) {
        console.log("Mongo problem from utils.js", error)

      }
}