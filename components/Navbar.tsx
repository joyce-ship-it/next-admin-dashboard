import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo.svg";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-primary px-5 py-2 text-gray-200 dark:bg-slate-700 dark:text-white">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="a logo that resembles a desktop computer"
          width={40}
        />
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/media/CrGcb6iXEAAaea4.jpg"
              alt="former f1 world champion Vettel"
              className="object-contain"
            ></AvatarImage>
            <AvatarFallback className="text-black">YN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/auth"}>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
