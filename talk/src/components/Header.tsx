import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Link from "next/link";
import paths from "@/paths";
import HeaderAuth from "./header-auth";

export default async function Header() {
  return (
    <header className="w-[100%] flex justify-between py-5 px-10">
      <Link
        href={`${paths.home()}`}
        className="text-3xl text-green-500 tracking-[3px] first-letter:text-4xl"
      >
        Hamet
      </Link>

      <div className="w-[40%] relative">
        <input
          type="text"
          className="w-[100%] px-6 py-2 rounded-full text-[16px] tracking-[2px] bg-[rgba(255,255,255,0.05)] outline-none text-gray-400 border-[1px] border-green-500"
          placeholder="Search for hamet"
        />

        <SearchIcon className="absolute right-[2%] top-[50%] text-green-500 translate-y-[-50%]" />
      </div>

      {/* {authContent} */}
      <Dropdown>
        <DropdownTrigger>{<HeaderAuth />}</DropdownTrigger>
        <DropdownMenu
          aria-label="Example with disabled actions"
          disabledKeys={["edit", "delete"]}
        >
          <DropdownItem key="new">New file</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </header>
  );
}
