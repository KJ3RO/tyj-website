import React from "react";

import Navbar from "../Nav/page";
import Footer from "../Footer/page";
import Image from "next/image";

const environmentalIssues = [
  {
    title: "Ocean Pollution",
    description:
      "Marine waste collected from Jeju has been steadily increasing since 2015, reaching over 22,000 tons in 2021. The pollution is largely driven by ocean currents, winds, and poor waste management.",
    causes: [
      "Waste from other regions carried by currents",
      "Local disposal issues and tourist activities",
    ],
    solutions:
      "Improved waste management and active community involvement, like beach clean-ups through organizations such as Thank you Jeju, are key solutions.",
    image: "/tyj.png",
  },
  {
    title: "Littering and Waste Management",
    description:
      "Jeju’s infrastructure struggles to handle waste from tourists, leading to illegal dumping and littering, which harms the ecosystem.",
    causes: [
      "Insufficient infrastructure",
      "Lack of public awareness",
      "Overwhelming number of visitors",
    ],
    solutions:
      "Investments in waste management systems, regulations, and educational campaigns for both locals and tourists are essential to solving this problem.",
    image: "/tyj.png",
  },
  {
    title: "Carbon Emissions",
    description:
      "The influx of tourists traveling by car and plane significantly increases Jeju’s carbon footprint. Flights and vehicle emissions are major contributors.",
    causes: [
      "High volumes of flights and car rentals",
      "Limited public transportation options for tourists",
    ],
    solutions:
      "Jeju's government aims to meet 100% of its energy needs with renewable energy by 2030, alongside promoting sustainable tourism.",
    image: "/tyj.png",
  },
  {
    title: "Soil Degradation",
    description:
      "Intensive fertilizer use for agriculture, combined with soil erosion, affects the health of Jeju’s land, contributing to water pollution.",
    causes: ["Overuse of chemical fertilizers", "Poor land management"],
    solutions:
      "Sustainable farming practices and land conservation techniques can reduce environmental impact.",
    image: "/tyj.png",
  },
];

export default function EnvironmentalPage() {
  return (
    <div>
      <Navbar />
      <header className="w-full h-[60vh] flex flex-col md:flex-row bg-green-600 text-white">
        {/* Left side for title and description, taking 40% width */}
        <div className="flex-[0.4] flex flex-col justify-center px-6 md:px-12 py-8 bg-opacity-80">
          <h1 className="text-5xl font-bold mb-4">Environmental Challenges</h1>
          <p className="text-lg">
            Jeju faces growing environmental issues driven by tourism, pollution, and poor waste
            management. Learn more about these challenges and the potential solutions.
          </p>
        </div>

        {/* Right side for background image, taking 60% width */}
        <div className="flex-[0.6] relative">
          <Image
            src="/tyj.png" // Replace with your image path
            alt="Nature in Jeju"
            layout="fill" // Fills the container
            objectFit="cover" // Ensures the image covers the area without distorting
            quality={100} // Controls image quality
            priority // Ensures the image loads first
          />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {environmentalIssues.map((issue, index) => (
          <section key={index} className="mb-16">
            <div
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              {/* Image Section */}
              <div className="flex-[0.5] relative mb-4 md:mb-0 md:mx-6 w-full h-64 md:h-96">
                <Image
                  src={issue.image}
                  alt={issue.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md shadow-md"
                />
              </div>

              {/* Text Section */}
              <div className="flex-[0.5]">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{issue.title}</h2>
                <p className="text-gray-700 mb-4">{issue.description}</p>

                {/* Causes */}
                {issue.causes && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Causes:</h3>
                    <ul className="list-disc pl-5 text-gray-700 mb-4">
                      {issue.causes.map((cause, i) => (
                        <li key={i}>{cause}</li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Solutions */}
                {issue.solutions && (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Solutions:</h3>
                    <p className="text-gray-700">{issue.solutions}</p>
                  </>
                )}
              </div>
            </div>
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-gray-700">
            Collective action and policy changes are vital to solving Jeju’s environmental issues.
            Sustainability is key to preserving the islands natural beauty for future generations.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
