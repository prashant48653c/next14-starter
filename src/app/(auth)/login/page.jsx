import { handleLogin } from "@/lib/actions"
import { auth, signIn } from "@/lib/auth"

 
const Loginpage = async() => {
    const session=await auth()
    console.log(session," is session")

  return (
    <div>
        <form action={handleLogin} >
            <button>Login with Github</button>
        </form>
    </div>
  )
}

export default Loginpage