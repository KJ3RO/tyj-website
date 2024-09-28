"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-green-600 ml-2">TYJ</span>
        </Link>
        
        <div className="space-x-4">
          <Link href="/components/issues" className="text-gray-800 hover:text-green-600 transition">Issues</Link>
          <Link href="/components/gallery" className="text-gray-800 hover:text-green-600 transition">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}

