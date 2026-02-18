"use server"
import { z } from "zod"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const loginSchema = z.object({
    email: z.email("Indtast en gyldig email adresse."),
    password: z.string().min(6, "Password skal være mindst 6 karakterer.")
})

export async function loginUser(prevState, formData) {
    
    const cookieStore = await cookies()
    const email = formData.get("email")
    const password = formData.get("password")
    

    if (email === prevState.values.email && password === prevState.values.password) {
        return prevState // no change
    }

    const result = loginSchema.safeParse({email, password})

    if (!result.success) {
        console.log(z.flattenError(result.error).fieldErrors)
        return {
            values: { email, password },
            errors: z.flattenError(result.error).fieldErrors
        }
    }

    const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    if (!response.ok) {

        return {
            values: { email, password },
            errors: { form: ["Forkert email eller adgangskode."] }
        }
    }

    //console.log(response)
    const data = await response.json()
    console.log(data)

    cookieStore.set("accessToken", data.accessToken)
    cookieStore.set("username", data.name)

    return redirect("/")

}