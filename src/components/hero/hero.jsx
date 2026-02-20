import Image from "next/image";
import Link from "next/link";   
export default function Hero() {
  return (
    <section className="h-screen w-full bg-[url('/heroimg.jpg')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-white">
      
      <figure className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={50}
          priority
        />
      </figure>

      <figure className="flex justify-center items-center mt-6">
        <Image
          src="/title.svg"
          alt="Title"
          width={400}
          height={40}
          priority
        />
      </figure>
   <Link href="/login" className="mt-10 rounded bg-white px-20 py-5 text-black hover:bg-blue-600">
      Login
    </Link>
    </section>
  );
}