"use server"
import { cookies } from "next/headers"



export async function getAllActivities() {
    try {
        const response = await fetch(`http://localhost:4000/api/v1/activities/`);
        if (!response.ok) {
            console.error("getAllActivities error:", response.status, response.statusText);
            return { success: false, message: "noget gik galt lol" };
        }
        return await response.json();
    } catch (error) {
        console.error("getAllActivities fetch failed:", error);
        return { success: false, message: error.message };
    }
}

export async function getActivityById(id) {
  
        const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
        if (!response.ok) {
            console.error("getActivityById error:", response.status, response.statusText);
            return null;
        }
        return await response.json();
    } 


export async function getUsersById(userId) 
{const cookieStore = await cookies()
const authToken = cookieStore.get("authToken")
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken.value}`
            }
        }
    )
    console.log(response);

    if (!response.ok) {
        throw new Error({ message: "something went wrong" })
    }
    return await response.json()
}

export async function getUserWithActivities(userId, authToken) {
    
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
        }
    });
    if (!response.ok) {
    const errorText = await response.text();
    console.error("Fetch failed:", response.status, errorText);
    throw new Error("Failed to fetch user");
    }
    return await response.json();
}