
import Hero from "@/components/hero/hero"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans ">
      <main className="flex min-h-screen max-w-3xl flex-col items-center justify-evenly py-32 px-16">
          <Hero />
    <Link href="/login" className="mt-10 rounded bg-white px-4 py-2 text-black hover:bg-blue-600">
      Login
    </Link>
      </main>
    </div>
  );
}
