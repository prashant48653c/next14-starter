import { addPost } from '@/lib/actions'
import React from 'react'

const page = () => {
  return (
  <form   action={addPost}>
    <input type="text" name="title" />
    <input type="text" name="desc" />
    <input type="text" name="slug" />
    <input type="text" name="userId" />

<button>Submit</button>
  </form>
  )
}

export default page