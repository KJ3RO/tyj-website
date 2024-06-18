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

export default function BentoGridDemo() {
  return (
    <div>
      <Navbar />
      <div className="h-40"> </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className= "md:col-span-3 md:row-span-2" 
          />
        ))}
      </BentoGrid>
      <Footer />
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] max-h-[15rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 "></div>
);
const items = [
  {
    title: "Litter and Waste management",
    description: "Litter and waste management in Jeju present significant challenges, due to inadequate infrastructure, limited public awareness, and the overflow in tourism. There is improper waste disposal, including littering and illegal dumping, which harms the island's environment, wildlife, and reputation as a sustainable destination. The severity of the issue is high due to Jeju's ecological importance and Jeju economic’s heavy reliance on tourism. Tourist dumping trash is a significant problem in Jeju, severely impacting the island's cleanliness and natural beauty, and threatening its status as a tourist destination. With millions of visitors annually, the volume of waste overwhelms existing infrastructure, deepening environmental degradation. Causes include limited awareness among tourists, cultural differences, and inadequate disposal facilities. Solutions entail improving waste infrastructure, educating tourists, and implementing stricter enforcement measures, requiring collaboration between government, tourism stakeholders, and local communities to address this pressing issue effectively. To address this, investments in waste infrastructure are crucial to improving collection and recycling facilities, alongside comprehensive public education campaigns to promote responsible waste disposal. Enforcing stricter regulations on littering and illegal dumping is vital, requiring collaboration between government, businesses, communities, and environmental organizations to develop tailored solutions for Jeju's unique needs.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Carbon Emissions",
    description: "The leading cause of carbon emissions in Jeju is the traveling of tourists in Jeju through cars and planes. The number of flights is predicted to double by 3037 and is continuously back on the rise. The rapid growth in tourism has put pressure on the island's infrastructure and natural resources, making it essential to implement strong environmental policies. Fortunately, the Jeju government aims to meet 100% of its power demand with renewable energy facilities through the installation of wind turbines and solar panels by 2030, which can significantly decrease the carbon footprint of the whole island. Furthermore, the implementation of electric cars and other eco-friendly vehicles may help decrease the carbon emissions in Jeju.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Marine Pollution",
    description: "According to the 'Jeju Marine Waste Generation Status and Management Plan', marine waste being collected from Jeju has been increasing every year since exceeding 10,000 tons for the first time in 2015 to 18,357 tons in 2020 and 22,082 tons in 2021. There are several causes of this phenomenon. One reason is that ocean currents transport waste from other regions and strong northwest winds every winter push marine waste into the coast of Jeju. In addition, a severe lack of waste management systems and centers on the island makes it difficult to solve these problems. The best course of action for the average person is to participate in beach clean-ups with organizations such as Thank you Jeju.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
