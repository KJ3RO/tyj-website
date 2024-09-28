import { useState } from "react";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Navbar from "../Nav/page";
import Footer from "../Footer/page";
import Image from "next/image";


// export default function BentoGridDemo() {
//   return (
//     <div>
//       <Navbar />
//       <div className="h-40"> </div>
//       <BentoGrid className="max-w-4xl mx-auto">
//         {items.map((item, i) => (
//           <BentoGridItem
//             key={i}
//             title={item.title}
//             description={item.description}
//             header={item.header}
//             icon={item.icon}
//             className= "md:col-span-3 md:row-span-2" 
//           />
//         ))}
//       </BentoGrid>
//       <Footer />
//     </div>
//   );
// }
// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] max-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "></div>
// );
// const items = [
//   {
//     title: "Litter and Waste management",
//     description: "Litter and waste management in Jeju present significant challenges, due to inadequate infrastructure, limited public awareness, and the overflow in tourism. There is improper waste disposal, including littering and illegal dumping, which harms the island's environment, wildlife, and reputation as a sustainable destination. The severity of the issue is high due to Jeju's ecological importance and Jeju economic’s heavy reliance on tourism. Tourist dumping trash is a significant problem in Jeju, severely impacting the island's cleanliness and natural beauty, and threatening its status as a tourist destination. With millions of visitors annually, the volume of waste overwhelms existing infrastructure, deepening environmental degradation. Causes include limited awareness among tourists, cultural differences, and inadequate disposal facilities. Solutions entail improving waste infrastructure, educating tourists, and implementing stricter enforcement measures, requiring collaboration between government, tourism stakeholders, and local communities to address this pressing issue effectively. To address this, investments in waste infrastructure are crucial to improving collection and recycling facilities, alongside comprehensive public education campaigns to promote responsible waste disposal. Enforcing stricter regulations on littering and illegal dumping is vital, requiring collaboration between government, businesses, communities, and environmental organizations to develop tailored solutions for Jeju's unique needs.",
//     header: <Skeleton />,
//     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Carbon Emissions",
//     description: "The leading cause of carbon emissions in Jeju is the traveling of tourists in Jeju through cars and planes. The number of flights is predicted to double by 3037 and is continuously back on the rise. The rapid growth in tourism has put pressure on the island's infrastructure and natural resources, making it essential to implement strong environmental policies. Fortunately, the Jeju government aims to meet 100% of its power demand with renewable energy facilities through the installation of wind turbines and solar panels by 2030, which can significantly decrease the carbon footprint of the whole island. Furthermore, the implementation of electric cars and other eco-friendly vehicles may help decrease the carbon emissions in Jeju.",
//     header: <Skeleton />,
//     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "Marine Pollution",
//     description: "According to the 'Jeju Marine Waste Generation Status and Management Plan', marine waste being collected from Jeju has been increasing every year since exceeding 10,000 tons for the first time in 2015 to 18,357 tons in 2020 and 22,082 tons in 2021. There are several causes of this phenomenon. One reason is that ocean currents transport waste from other regions and strong northwest winds every winter push marine waste into the coast of Jeju. In addition, a severe lack of waste management systems and centers on the island makes it difficult to solve these problems. The best course of action for the average person is to participate in beach clean-ups with organizations such as Thank you Jeju.",
//     header: <Skeleton />,
//     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Power of Communication",
//     description: "Understand the impact of effective communication in our lives.",
//     header: <Skeleton />,
//     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Pursuit of Knowledge",
//     description: "Join the quest for understanding and enlightenment.",
//     header: <Skeleton />,
//     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Joy of Creation",
//     description: "Experience the thrill of bringing ideas to life.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: "The Spirit of Adventure",
//     description: "Embark on exciting journeys and thrilling discoveries.",
//     header: <Skeleton />,
//     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
//   },
// ];


const environmentalIssues = [
  {
    title: "Ocean Pollution",
    description: "Marine waste collected from Jeju has been steadily increasing since 2015, reaching over 22,000 tons in 2021. The pollution is largely driven by ocean currents, winds, and poor waste management.",
    causes: [
      "Waste from other regions carried by currents",
      "Local disposal issues and tourist activities"
    ],
    solutions: "Improved waste management and active community involvement, like beach clean-ups through organizations such as Thank you Jeju, are key solutions.",
    image: "/tyj.png"
  },
  {
    title: "Littering and Waste Management",
    description: "Jeju’s infrastructure struggles to handle waste from tourists, leading to illegal dumping and littering, which harms the ecosystem.",
    causes: [
      "Insufficient infrastructure",
      "Lack of public awareness",
      "Overwhelming number of visitors"
    ],
    solutions: "Investments in waste management systems, regulations, and educational campaigns for both locals and tourists are essential to solving this problem.",
    image: "/tyj.png",
  },
  {
    title: "Carbon Emissions",
    description: "The influx of tourists traveling by car and plane significantly increases Jeju’s carbon footprint. Flights and vehicle emissions are major contributors.",
    causes: [
      "High volumes of flights and car rentals",
      "Limited public transportation options for tourists"
    ],
    solutions: "Jeju's government aims to meet 100% of its energy needs with renewable energy by 2030, alongside promoting sustainable tourism.",
    image: "/tyj.png"
  },
  {
    title: "Soil Degradation",
    description: "Intensive fertilizer use for agriculture, combined with soil erosion, affects the health of Jeju’s land, contributing to water pollution.",
    causes: [
      "Overuse of chemical fertilizers",
      "Poor land management"
    ],
    solutions: "Sustainable farming practices and land conservation techniques can reduce environmental impact.",
    image: "/tyj.png"
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
            Jeju faces growing environmental issues driven by tourism, pollution, and poor waste management. Learn more about these challenges and the potential solutions.
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
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
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
            Collective action and policy changes are vital to solving Jeju’s environmental issues. Sustainability is key to preserving the islands natural beauty for future generations.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
