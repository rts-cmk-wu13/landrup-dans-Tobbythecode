
// import { cookies } from "next/headers";

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     console.log("Request body:", body);

//     const activityId = body.activityId;
//     const cookieStore = cookies();
//     const userId = cookieStore.get("userId")?.value;
//     const authToken = cookieStore.get("authToken")?.value;

//     console.log("userId:", userId, "authToken:", authToken, "activityId:", activityId);

//     if (!userId || !authToken) {
//       return new Response(JSON.stringify({ error: "Not logged in" }), { status: 401 });
//     }

//     const response = await fetch(`http://localhost:4000/api/v1/activities/${activityId}/join`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userId }),
//     });

//     if (!response.ok) {
//       let errorMsg = "Failed to join activity";
//       try {
//         const data = await response.json();
//         if (data?.error) errorMsg = data.error;
//       } catch {}
//       return new Response(JSON.stringify({ error: errorMsg }), { status: 400 });
//     }

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (err) {
//     console.error("API /api/join error:", err);
//     return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
//   }
// }