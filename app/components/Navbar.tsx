// /Users/dan/Desktop/CPS3500/homework/unit6/as1/my-portfolio/app/components/Navbar.tsx

"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Dan Li</h1>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/about" className="hover:text-blue-500">About Dan</Link> 
        <Link href="/awards" className="hover:text-blue-500">Awards & Honors</Link>
        <Link href="/publications" className="hover:text-blue-500">Publications</Link>
        <Link href="/experience" className="hover:text-blue-500">Experience</Link>
        <Link href="/skills" className="hover:text-blue-500">Skills</Link>
      </div>
    </nav>
  );
}