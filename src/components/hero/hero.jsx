import Image from "next/image";

export default function Hero() {
return (


<>


    <figure className="flex content-center">
<Image 
        
          src="/logo.svg"
          alt="Next.js logo"
          width={200}
          height={50}
          priority
        />
</figure>


<div>  
      <figure className="flex content-center">
<Image
        
          src="/title.svg"
          alt="Next.js logo"
          width={400}
          height={40}
          priority
        />
</figure>
</div>

</>


)

}