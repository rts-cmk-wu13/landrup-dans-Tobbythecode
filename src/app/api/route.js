import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = request.nextUrl;
  const code = url.searchParams.get("code");

  const response = await fetch("http://localhost:4000/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "instructor1",
      password: "1234"
    })
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Token request failed" }, { status: 500 });
  }

  const data = await response.json();

  const cookieStore = cookies();

  cookieStore.set("IPM_AT", data.access_token, {
    maxAge: data.expires_in,
    httpOnly: true
  });

  cookieStore.set("IPM_RT", data.refresh_token, {
    maxAge: data.expires_in * 5,
    httpOnly: true
  });

  return NextResponse.redirect(new URL("/", request.url));
}