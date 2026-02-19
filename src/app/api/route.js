import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

export async function GET(request) {
    const url = new URL(request.nextUrl);
    const code = url.searchParams.get("code")
    //console.log("code", code);

    const response = await fetch("http://localhost:4000/auth/token", {
   "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "username": "instructor1",
    "password": "1234"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));

    const data = await response.json();

    const cookieStore = await cookies();

    
    cookieStore.set("IPM_AT", data.access_token, { maxAge: data.expires_in });
    cookieStore.set("IPM_RT", data.refresh_token, { maxAge: data.expires_in * 5 });


    return NextResponse.redirect(new URL("http://127.0.0.1:3000/"));
}