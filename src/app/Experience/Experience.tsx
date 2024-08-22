import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid" ;
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <div className="aspect-video w-full
            overflow-hidden rounded-x1">
              <img src={item.url} alt={item.title}
              className="w-full h-full object-cover" />
            </div>
          }
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "MBC Landing Page Website",
    description: "Dummy information about MBC lab.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "/images/LP.jpg",
  },
  {
    title: "Listify",
    description: "A to do list mobile app for recording tasks and sharing tasks with friends",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "/images/LIS.jpg",
  },
  {
    title: "Bible Camp 2023",
    description: "Designing posts for aesthetically pleasing Instagram content.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    url: "/images/bc.jpg",
  },
  {
    title: "BUDGET-IN AJA",
    description:
      "Student financial management website for per week.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "/images/Budget.png",
  },
  {
    title: "MAWUT",
    description: "A brand engaged in the food and beverage sector, namely mentai and kuwut ice.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    url: "/images/mwt.jpg",
  },

];
