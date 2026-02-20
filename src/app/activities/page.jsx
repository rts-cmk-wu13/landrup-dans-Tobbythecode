import { getAllActivities } from "@/lib/dal";
import BlogCard from "@/components/BlogCard/Blog.jsx";

export default async function ActivitiesPage() {

    const activities = await getAllActivities()
    console.log(activities);


    if(activities.success === false){
        return (
            <main>
                <h1>oh shit somethings not right</h1>
                <p>{activities.message}</p>
            </main>
        )
    }

    return (
        <main>
            <h1 className="mb-4">Aktiviteter</h1>
            <section className="columns-1">
            {activities.map(activity => (
                <BlogCard activity={activity} key={activity.id} />
            ))}
            </section>
        </main>

    )


}