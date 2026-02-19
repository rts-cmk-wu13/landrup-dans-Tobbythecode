import Image from "next/image"

export default async function ProfilePage({ user }) {

 const response = await fetch(`http://localhost:4000/api/v1/users/${user}`, {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo1LCJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIkMmEkMTUkay5nVzZqT005ZXlWSU1kTEMwRy9MLjdQT0J1bGVWNTYzNWNhejdXaDc5VFRkSTBnVWsuT2UiLCJmaXJzdG5hbWUiOiJNYXRoaWxkZSIsImxhc3RuYW1lIjoiUGV0ZXJzZW4iLCJhZ2UiOjE0LCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTI6MDguMDgyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTI6MDguMDgyWiJ9LCJpYXQiOjE3NzEyNjY0NTAsImV4cCI6MTc3MTI3MDA1MH0.79JOC41U3WybwToh2Wm9iSUdYMGrkKb5q6nh0CBpMxs"
  }
})
  if (!response.ok) {

  return (
    <>
      <h1 className="text-center">Min profil</h1>
  
      <section className="flex flex-col items-center bg-white">
       
<Image
     
         
          src="/user.svg"
          alt="User profile"
          width={100}
          height={100}
          priority
        />
   
    
 
  
      
        <p>Name: {user.firstname} {user.lastname}</p>
        <p>Age: {user.age}</p>
      </section>
    </>
  );
}
}