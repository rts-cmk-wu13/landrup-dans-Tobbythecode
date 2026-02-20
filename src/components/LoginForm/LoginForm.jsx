"use client"

import { useState } from "react"
import Hero from "@/components/hero/hero"
import { useActionState } from "react"
import { loginUser } from "./action"

const initialState = {
    values : { username: "", password: "" },
errors: undefined
}


export default function LoginForm() {

const [state,formAction, isPending] = useActionState(loginUser, initialState)

  return (
    <>
      <Hero />
      <form action={formAction} noValidate className="flex flex-col items-center gap-4">
        <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-sm">

          <input
            id="username"
            type="text"
            name="username"
      
          defaultValue={state.values.username}
          
          />
          {state.errors?.username && <p>{state.errors.username}</p>}
        </div>

        <div className="bg-white text-black p-4 rounded shadow-md w-full max-w-sm">

          <input
            id="password"
            type="password"
            name="password"
    
       defaultValue={state.values.password}
          />
              {state.errors?.password && <p>{state.errors.password}</p>}
        </div>

        {state.errors?.form && <p>{state.errors.form}</p>}

        <button
          type="submit"
          disabled={isPending}
          className="bg-green-400 disabled:bg-gray-400 px-4 py-2 rounded"
        >
          {isPending ? "Logger ind..." : "Log ind"}
        </button>
      </form>
    </>
  )
}