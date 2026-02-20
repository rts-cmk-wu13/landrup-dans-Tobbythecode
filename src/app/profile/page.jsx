import { cookies } from "next/headers"
import Image from "next/image"

export default async function ProfilePage({ params }) {
  const { id } = params

  const cookieStore = await cookies() 
  const authToken = cookieStore.get("authToken")?.value

  if (!authToken) {
    return <h1 className="text-center">Not logged in</h1>
  }

  const response = await fetch(
    `http://localhost:4000/api/v1/users/${id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      cache: "no-store"
    }
  )

if (response.ok) {
  window.location.href = "/profile" // manually redirect after success
} else {
  const data = await response.json()
  setErrors({ form: data.error })
}
  const user = await response.json()

  return (
    <>
      <h1 className="text-center">Min profil</h1>

      <section className="flex flex-col items-center bg-white">
        <Image src="/user.svg" alt="User profile" width={100} height={100} priority />

        <p>Name: {user.firstname} {user.lastname}</p>
        <p>Age: {user.age}</p>
      </section>
    </>
  )
}