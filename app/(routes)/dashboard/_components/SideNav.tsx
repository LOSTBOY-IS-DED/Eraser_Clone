import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SideNav() {
  return (
    <div className="bg-gray-100 h-screen fixed w-64 border-r p-6">
      <div className="flex items-center gap-3 hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
        <Image src={"/Logo.svg"} alt="logo hai bkl" width={40} height={40} />
        <h2 className="flex gap-2 items-center font-bold text-[17px]">
          Team Name
          <ChevronDown />
        </h2>
      </div>
    </div>
  );
}

export default SideNav;
