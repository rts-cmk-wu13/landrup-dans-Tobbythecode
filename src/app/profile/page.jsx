import Image from "next/image"
import Link from "next/link"
import { cookies } from "next/headers";
import { getUsersById, getUserWithActivities } from "../../lib/dal";

export default async function Profilepage() {
    const cookieStore = await cookies()
const authToken = cookieStore.get("authToken")?.value;
    const userId = cookieStore.get('username')?.value;
    const user = await getUserWithActivities(userId, authToken);
    


    const activities = Array.isArray(user.activities) ? user.activities : [];

    const sectionTitle =
        user.role === "instruktør" || user.role === "instructor"
            ? "Mine hold"
            : "Tilmeldte hold";

    return (
        <>
            <div className="bg-[#003645] text-white py-3 text-center text-lg font-semibold">
                Min profil
            </div>
            <div className="bg-white w-full flex flex-col items-center py-6 shadow">
                <Image src="/user.svg" alt="User profile" width={80} height={80} priority />
                <h2 className="mt-2 text-xl font-bold text-[#003645]">
                    {user.firstname} {user.lastname}
                </h2>
                <p className="text-[#003645] text-sm">{user.role}</p>
            </div>
            <div className="w-full bg-[#003645] text-white px-4 py-2 flex items-center justify-between mt-4">
                <span className="font-semibold">{sectionTitle}</span>
            </div>
          {user.role !== "instruktør" && user.role !== "instructor" && (
  <ul className="flex flex-wrap gap-4">
    {activities.map(activity => (
      <li key={activity.id}>
        <div className="bg-[#cfd8dc] rounded-xl p-6 max-w-xs shadow-md border-4 border-[#003645]">
          <div className="mb-4">
            <div className="text-2xl font-bold text-[#003645]">{activity.name}</div>
            <div className="text-[#003645] text-lg mt-2">
              {activity.weekday} kl. {activity.time}
            </div>
          </div>
          <button
            className="bg-[#003645] text-white rounded-lg px-8 py-2 shadow-md font-medium text-lg transition "
          >
            Vis hold
          </button>
        </div>
      </li>
    ))}
  </ul>
)}
        </>
    );
}