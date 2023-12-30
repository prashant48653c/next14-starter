import { getSinglePost } from '@/lib/data'
import React from 'react'


 

const SlugPage =async ({params}) => {
  
 const {slug}=(params)
 const blog=await getSinglePost(slug)
 console.log(blog)
  return (
    <div  className='w-full flex-col justify-center flex items-center '>
      <div className='text-3xl my-3'>
{blog.title}
</div>
<div>
<img className="rounded-t-lg" height={"200px"} width={"200px"} src="https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960" alt="" />
</div>
<div className='my-3 text-center'>
  <p>Ram Verma</p>
<p>2013/03/23</p>
</div>

<div className='px-7 mb-6 text-xl'>
{blog.desc}
</div>
    </div>
  )
}

export default SlugPage