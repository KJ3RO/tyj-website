"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import tyj from "../../asset/tyj.png";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 drop-shadow-lg", className)}>
      <Menu setActive={setActive}>
        <Link href="/">Home</Link>
        <Link href="/components/about">About</Link>
        <Link href="/components/issues">Research</Link>
        <Link href="/components/gallery">Gallery</Link>
      </Menu>
    </div>
  );
};

export default Navbar;
