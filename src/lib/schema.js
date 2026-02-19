import { z } from "zod"

export const loginSchema = z.object({
    username: z.string("Indtast en gyldig brugernavn."),
    password: z.string().min(3, "Password skal være mindst 3 karakterer.")
})