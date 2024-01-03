import { Nextblog } from "@/lib/model"
import {NextResponse} from 'next/server'
import { connectDB } from "@/lib/utils"

export const GET=async(request,{params})=>{
    try{
        const {slug}=params
        console.log(slug)
      await connectDB()
        const post=await Nextblog.findOne({slug:slug});
        return NextResponse.json(post)
    }catch(err){
        console.log(err)
    }
}