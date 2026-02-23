import { getActivityById } from "@/lib/dal";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ActivityDetailPage({ params }) {
const { id } = await params;
    const activity = await getActivityById(id);
    if (!activity) return notFound();

    return (
        <main className="min-h-screen  flex flex-col items-center justify-center py-8">
              <div className="relative w-full max-w-xs rounded-t-lg overflow-hidden shadow-lg">
                <img
                    src={activity.asset.url}
                    alt={activity.name}
                    className="w-full h-80 object-cover"
                />
                <button
                    className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-cyan-900 text-white px-8 py-2 rounded-lg font-semibold shadow-md hover:bg-cyan-800 transition"
                >
                    Tilmeld
                </button>
            </div>
            <article className="bg-cyan-900 text-white w-full max-w-xs rounded-b-lg p-5 -mt-2 shadow-lg">
                <h1 className="text-lg font-bold mb-1">{activity.name}</h1>
                <p className="text-sm mb-2">{activity.minAge}+ år</p>
                <div
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: activity.description }}
                />
            </article>
            <Link href="/activities" className="mt-6 text-cyan-900 underline">
                Return to activities
            </Link>
        </main>
    );
}