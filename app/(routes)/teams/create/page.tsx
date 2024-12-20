"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      console.log(resp);
      if (resp) {
        router.push("/dashboard");
        toast("Team created Successfully!!!");
      }
    });
  };

  return (
    <div>
      <div className="flex align-center justify-center gap-4 px-6 md:px-16 my-16">
        <Image
          src="/Logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="mt-3"
        />
        <span className="font-extrabold text-[50px] mt-[11px]">
          Eraser By Lord Subh
        </span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h2 className="font-extrabold text-[40px] py-3">
          What should we call your team ?
        </h2>
        <h2 className="text-gray-500">
          You can always change this later from settings
        </h2>
        <div className="mt-7 w-[40%]">
          <label className="font-semibold text-gray-500">Team Name</label>
          <Input
            placeholder="Team Name"
            className="mt-3"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
          />
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-600 rounded-full mt-9 w-[30%]"
          disabled={!(teamName && teamName.length > 0)}
          onClick={() => createNewTeam()}
        >
          Create Team
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
