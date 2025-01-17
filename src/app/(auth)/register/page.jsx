 import { handleLogin, register } from '@/lib/actions'
import Link from 'next/link'
const RegisterPage = () => {
  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <form action={register}>
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="User Name" />

            <input 
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email" />

            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password" />
            <input 
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password" />

            <button
                
                class="w-full text-center py-3 rounded bg-green  hover:bg-green-dark focus:outline-none my-1"
            >Create Account</button>
          
       

        <div class="text-grey-dark mt-6">
            Already have an account? 
            <Link href="/login" class="no-underline border-b border-blue text-blue" >
                Log in
            </Link>

         
        </div>
        </div>

        </form>  
        </div>
    
</div>
  )
}

export default RegisterPage