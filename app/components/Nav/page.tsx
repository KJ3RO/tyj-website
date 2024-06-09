"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 drop-shadow-lg">
      <Link href="/">Home</Link>
      <Link href="/components/issues">Research</Link>
      <Link href="/components/gallery">Gallery</Link>
    </div>
  );
}
