import { getActivityById } from "@/lib/dal";
import Link from "next/link";

import { notFound } from "next/navigation";
export default async function ActivityDetailPage({ params }) {


    const { id } = await params;
    const activity = await getActivityById(id);
    console.log(activity);
 
    if (!activity) return notFound();

    return (
        <main>
            <Link href="/activities">Return to activities</Link>
            <article>
                <img src={activity.asset.url} alt={activity.name} />
                <h1>
                    {activity.name}
                </h1>
                <p>{activity.minAge}+ år</p>
                <div dangerouslySetInnerHTML={{ __html: activity.description }}></div>

 
            </article>
        </main>
    )
}