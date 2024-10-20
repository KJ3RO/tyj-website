import React from "react";
import data from "./data";
import Image from "next/image";
import Navbar from "../Nav/page";
import Footer from "../Footer/page";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8 md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {data.map((image, index) => {
          return (
            <div key={index}>
              <div className="relative mb-4 rounded-2xl">
                <Image
                  width={400}
                  height={400}
                  className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                  src={image.src}
                  alt={image.caption}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
