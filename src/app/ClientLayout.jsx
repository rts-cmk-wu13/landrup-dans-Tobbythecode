"use client"; 

import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer.jsx";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="pb-20">{children}</div>
      <Footer />
    </ThemeProvider>
  );
}