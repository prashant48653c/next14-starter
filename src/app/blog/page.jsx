import React from 'react'
import Blogcard from '../../components/Blogcard'
import { getPost, getUsers } from '@/lib/data'



 
const BlogPage = async() => {
  const posts=await getPost()
  return (
    <section className='flex gap-4 justify-center flex-wrap basis-3'>

 {
 
 posts?.map((post)=>{
return (
  <div key={post.id}> 
 
<Blogcard  post={post}/>
  </div>

)
 })
 
 }


    </section>
  )
}

export default BlogPage