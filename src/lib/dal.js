"use server"




export async function getAllBlogPosts() {
    try {
        const response = await fetch("http://localhost:4000/posts")
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        if (response.headers.get("content-type") === "application/json") {
            return await response.json();
        }
        throw new Error("Unexpected response format");
    } catch (error) {
        console.log("getAllBlogPosts", error)
        return {
            success: false,
            message: "Something went wrong on the server try again later"
        }
    }
}

export async function  getBlogPostById (id) { 
  try {
  if (!id) {  
    throw new Error({message: "ID is required"});
  }
if (!/^\d+$/.test(id)) {
  throw new Error({message: "incorrect ID format"});
}


  const response = await fetch(`http://localhost:4000/posts/${id}`)
  if (!response.ok) {
    throw new Error({message: "Fejl ved hentning af data"});
  }
     if (response.status !== 200) {
      throw new Error({message: response.statusText});
  }

if (response.headers.get("content-type ") === "application/json") {
return await response.json();
     }


throw new Error ({message: "NOT JSON"})
} catch (error) {
  console.log("getBlogPostById Error", error);
  return {
    success: false,
    message: "something went wrong idk lmao  "
  }
}
}