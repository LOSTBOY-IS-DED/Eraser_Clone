import React from "react";

import SideNavTopSection from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SideNavBottomSection from "./SideNavBottomSection";
import { Archive, Flag, Github } from "lucide-react";

function SideNav() {
  const { user }: any = useKindeBrowserClient();

  return (
    <div className=" h-screen fixed w-72 border-r border-[1px] p-6 flex flex-col">
      <div className="flex-1">
        <SideNavTopSection user={user} />
      </div>
      <div>
        <SideNavBottomSection />
      </div>
    </div>
  );
}

export default SideNav;
