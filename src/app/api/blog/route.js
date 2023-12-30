import { Nextblog } from "@/lib/model"
import {NextResponse} from 'next/server'
import { connectDB } from "@/lib/utils"

export const GET=async(request)=>{
    try{
        connectDB()
        const post=await Nextblog.find({});
        return NextResponse.json(post)
    }catch(err){
        console.log(err)
    }
}