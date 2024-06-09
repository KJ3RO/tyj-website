"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Navbar from "../Nav/page";
import Footer from "../Footer/page";

export default function LayoutGridDemo() {
  return (
    <div>
      <Navbar />
      <div className="h-20"> </div>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
      <Footer />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cleaning the beach</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We gathered once a week to clean up different beaches in Jeju. It was a great way to give
        back to our childhood playgrounds.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Picking trash for our neighbors</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Due to all the convienence stores in Jeju, we found a lot of trash on the streets. We
        decided to clean abandoned areas and help our neighbors.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Raising awareness</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We created posters and flyers to raise awareness about environmental issues in our
        community. We also hosted events to educate people about the importance of protecting our
        planet.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Fundraising for donatiions</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We participated in multiple bazaars near our home town and school to raise funds for
        donations and hosting events such as game jams.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/beach2.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/plogging1.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/ad1.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/bazaar2.png",
  },
];
