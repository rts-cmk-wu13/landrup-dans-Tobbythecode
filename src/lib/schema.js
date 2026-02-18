import { z } from "zod"

export const loginSchema = z.object({
    email: z.email("Indtast en gyldig email adresse."),
    password: z.string().min(6, "Password skal være mindst 6 karakterer.")
})