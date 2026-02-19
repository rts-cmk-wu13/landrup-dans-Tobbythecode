"use client"
import { useActionState } from "react"
import { loginUser } from "./action"
import Hero from "@/components/hero/hero"

const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}

export default function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginUser, initialState)
    console.log(state)
    return ( 
       <>    
      <Hero/>  <form className="justify-center " action={formAction} noValidate> 

            <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-sm">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" defaultValue={state.values.username} />
                {state.errors?.username && <p>{state.errors.username}</p> }
            </div>
            <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-sm">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" defaultValue={state.values.password} />
                { state.errors?.password && <p>{state.errors.password}</p> }
            </div>
            { state.errors?.form && <p>{state.errors.form}</p>}
            <button type="submit" disabled={isPending} className="bg-green-400 disabled:bg-gray-400">{ isPending ? "Logger ind..." : "Log ind"}</button>
      </form>  </>
    )
}
