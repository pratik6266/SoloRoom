"use client";
import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../common/UserAvatar";
import dynamic from "next/dynamic";
const LogoutModel = dynamic(() => import("../auth/logoutModel"))

export default function ProfileMenu({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {

  const [open, setOpen] = useState(false);
    
  return (
    <>
      {open && <Suspense fallback={<p>Loading...</p>}>
      <LogoutModel open={open} setOpen={setOpen} />
        </Suspense>}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={name} image={image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}