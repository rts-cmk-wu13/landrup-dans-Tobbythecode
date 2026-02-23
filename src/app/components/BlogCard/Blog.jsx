import Link from "next/link";

export default function BlogCard({ activity }) {
  return (
    <div className="flex justify-center font-sans my-4">
      <main className="max-w-3xl flex flex-col items-center gap-4">
        <Link href={`/activities/${activity.id}`}>
          <article className="flex flex-col items-center gap-3">
   <div className="relative w-full sm:w-[500px] h-[500px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={activity.asset.url}
                alt={activity.name}
              />

           
<div className="absolute bottom-0 left-0 w-full bg-[rgba(0,49,71,0.75)] text-white p-4 text-left">
  <h2 className="text-lg font-semibold">{activity.name}</h2>
  <p className="text-sm">{activity.minAge}+ år</p>
</div>
            </div>
          
          </article>
        </Link>
      </main>
    </div>
  );
}