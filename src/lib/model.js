import mongoose from 'mongoose'
 
 
 

const NextuserSchema=new mongoose.Schema({
     username:{
        type:String,
        required:true,
        unique:true,
        min:6,
        max:16
    },
    email:{
        type:String,
        unique:true,
        required:true,

    },
    password:{
        type:String,
        required:true,
        min:6,

    },
    img:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
)


const NextblogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        
        required:true,

    },
    userId:{
        type:String,
        required:true,
        

    },
    img:{
        type:String
    },
    slug:{
        type:String,
       required:true,
       unique:true
    }
},
{timestamps:true}
)


export const Nextuser=mongoose.models.Nextuser || mongoose.model("Nextuser",NextuserSchema)
export const Nextblog=mongoose.models.Nextblog || mongoose.model("Nextblog",NextblogSchema)
