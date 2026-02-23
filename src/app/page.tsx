
import Hold from "./components/hold/hold";
import Hero from "./components/hero/hero";
import Image from "next/image"
export default function Home() {
  return (
    <div className="flex min-h-screen justify-center  font-sans  ">
      <main className="flex min-h-screen max-w-3xl flex-col items-center justify-evenly ">  

<Hero/>
 
  
    <Hold/>
      </main>
    </div>
  );
}
