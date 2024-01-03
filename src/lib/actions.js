import { signIn, signOut } from "./auth"
import { Nextblog } from "./model"
import { connectDB } from "./utils"
import {NextResponse} from "next/server"
 export const addPost=async(formData)=>{
    'use server'
 const {title , slug, userId, desc}=Object.fromEntries(formData)
 console.log(title)
 connectDB()
 const post=await new Nextblog({title , slug, userId, desc})
 await post.save()
 revalidate("/blog")
 return NextResponse.json({data:post})
 }



 export const handleLogin=async()=>{
   'use server'
  await signIn('github')

}

export const handleLogout=async()=>{
   
  await signOut('github')

}