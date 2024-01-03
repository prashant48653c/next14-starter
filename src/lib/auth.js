
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectDB } from "./utils"
import { Nextuser } from "./model"
export const { handlers:{GET,POST}, auth ,signIn,signOut} = NextAuth({
    providers: [GitHub(
        {
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks:{
        async signIn({user,account,profile}) {
          console.log(user,account,profile)
          if(account.provider === 'github'){
            connectDB()
            const olduser=await Nextuser.find({email:user.email})
            if(!olduser){
                const newUser=await new Nextuser({email:user.email,
                username:user.name,
                img:user.image,
               
                isAdmin:false
                })
                await newUser.save()
            }
          }
            return true
        }
    }
})