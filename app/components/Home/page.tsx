"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Thank You Jeju
        </motion.h1>
      </LampContainer>
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const dummyContent = [
  {
    description: (
      <>
        <p>
          Welcome to our community service website! We are a group of individuals dedicated to
          making a positive impact in our community through various service projects and events.
          Whether you are an individual looking to get involved and give back, or an organization
          seeking volunteers for your cause, we hope to connect you with opportunities to make a
          difference. We collaborate with BHA and SJA to help protect the environment on Jeju
          Island. Together, we address environmental issues such as pollution by combining
          resources. Whether through cleanups, tree planting, or educational campaigns, we work to
          raise awareness and drive sustainable change in the community. Our community service group
          stands out by collaborating with other organizations, prioritizing education and
          awareness, and using an online store to raise funds. We are a group of individuals
          dedicated to making a positive impact in our community through various service projects
          and events.
        </p>
      </>
    ),
    image: "/bazaar1.JPG",
  },
];
