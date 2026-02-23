"use server"

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
    try {
        const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
        if (!response.ok) {
            console.error("getActivityById error:", response.status, response.statusText);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error("getActivityById fetch failed:", error);
        return null;
    }
}