"use client";

import { FaListUl, FaUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="w-full fixed bottom-0 bg-[rgb(233,233,233)] h-20 flex  justify-evenly items-center">
      <div className="flex gap-12 justify-evenly items-center w-full">
        <AiOutlineHome
          className="text-[#6F6F6F] hover:text-[#000000] text-4xl transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/")}
          title="Home"
        />
        <FaListUl
          className="text-[#6F6F6F] hover:text-[#000000] text-4xl transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/activities")}
          title="Activities"
        />
        <FaUser
          className="text-[#6F6F6F] hover:text-[#000000] text-4xl transition-all duration-200 cursor-pointer"
          onClick={() => router.push("/profile")}
          title="Profile"
        />
      </div>
    </footer>
  );
}