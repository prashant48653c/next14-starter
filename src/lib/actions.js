import { signIn, signOut } from "./auth"
import { Nextblog, Nextuser } from "./model"
import { connectDB } from "./utils"
import {NextResponse} from "next/server"
import bcrypt from 'bcrypt'
 export const addPost=async(formData)=>{
    'use server'
 const {title , slug, userId, desc}=Object.fromEntries(formData)
 
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
   'use server'
  await signOut('github')

}

export const register=async(formData)=>{
  'use server'
  connectDB()
  const {username,email,password,confirm_password}=Object.fromEntries(formData)
  if(password != confirm_password){
    return {error:"Password didn't matched"}

  }
  const oldUser=await Nextuser.findOne({email})
  if(!oldUser){
    const salt =await bcrypt.genSalt(10);
const hashed =await bcrypt.hash(password, salt);
    const newUser=await new Nextuser({email,
      username,
      password:hashed

      })
      await newUser.save()
  }else if(oldUser){
    return {error:"user already exist"}
    
  }
}

export const login=async(formData)=>{
  'use server'
  connectDB()
  const {email,password}=Object.fromEntries(formData)
 
  const oldUser=await Nextuser.findOne({email})
  if(!oldUser){
    const salt =await bcrypt.genSalt(10);
const hashed =await bcrypt.hash(password, salt);
    const newUser=await new Nextuser({email,
      username,
      password:hashed

      })
      await newUser.save()
  }else if(oldUser){
    return {error:"user already exist"}
    
  }
}