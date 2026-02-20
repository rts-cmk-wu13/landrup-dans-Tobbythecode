import Link from "next/link";

export default function BlogCard({ activity}) {

    return (
        <>
          <div className=" justify-center    font-sans  ">
            <main className=" max-w-3xl   items-center justify-evenly">
        <Link href={`/activities/${activity.id}`}>
        <article>
<figure className="flex  justify-center items-center">
<img className="rounded-lg w-80 h-full" src={activity.asset.url} alt="" />
</figure>
<div>
<h2 id={"activities" + activity.id}>{activity.name} </h2>
<p>{activity.minAge} + år</p>
</div>


        </article>
        </Link>
   </main>    </div> </>
    )
}