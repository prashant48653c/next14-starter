import React from 'react'


const fetchdata=async(slug)=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
   
  let data=await res.json()

  return data
}

const SlugPage =async ({params}) => {
  
 const {slug}=(params)
 const blog=await fetchdata(slug)
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
{blog.body}
</div>
    </div>
  )
}

export default SlugPage