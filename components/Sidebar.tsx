import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Folders,
  CreditCard,
  Settings,
  Newspaper,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

export default function Sidebar() {
  return (
    <div className="h-full">
      <Command className="rounded-none border bg-secondary shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard />
              <Link href={"/"}>Dashboard</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper />
              <Link href={"/posts"}>
                <span>Posts</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Folders />
              <Link href={"#"}>
                <span>Folders</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
}
