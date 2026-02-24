"use client";


import Footer from "./components/Footer.jsx";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
<>
      <div className="pb-20">{children}</div>
      {pathname !== "/login" && <Footer />}
</>
  );
}