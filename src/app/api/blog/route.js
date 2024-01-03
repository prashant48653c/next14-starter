import { Nextblog } from "@/lib/model"
import {NextResponse} from 'next/server'
import { connectDB } from "@/lib/utils"
import {NextResponse} from "next/server"
export const GET=async(request)=>{
    try{
        await connectDB()
        const post=await Nextblog.find({});
        return NextResponse.json({data:post})
    }catch(err){
        console.log(err,"when getting blog")
    }
}