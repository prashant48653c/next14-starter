

//Methods for getting post and database

import { Nextblog, Nextuser } from "./model"
import { connectDB } from "./utils"

export const getPost=async()=>{
    try {
        await connectDB()
        const posts=await Nextblog.find({}) 
        return posts
    } catch (error) {
        console.log("Error while getting the post ",error)
    }
}

export const getSinglePost=async(slug)=>{
    try {
        await connectDB()
        const post=await Nextblog.find({slug:slug}) 
        return post
    } catch (error) {
        console.log("Error while getting the single post ",error)
    }
}

export const getSingleUser=async(id)=>{
    try {
        await connectDB()
        const singleuser=await Nextuser.find({_id:id}) 
        return singleuser
    } catch (error) {
        console.log("Error while getting the single user ",error)
    }
}

export const getUsers=async()=>{
    try {
        await connectDB()
        const users=await Nextuser.find({}) 
        return users
    } catch (error) {
        console.log("Error while getting the users ",error)
    }
}