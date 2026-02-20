
import { NextResponse } from "next/server"

export async function POST(req) {
  const { username, password } = await req.json()

  const response = await fetch("http://localhost:4000/auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })

  if (!response.ok) {
    return NextResponse.json({ error: "Login failed" }, { status: 401 })
  }

  const data = await response.json()


  const res = NextResponse.redirect("/profile")
  res.cookies.set("authToken", data.access_token, { httpOnly: true, path: "/" })
  res.cookies.set("username", data.name, { path: "/" })
  return res
}