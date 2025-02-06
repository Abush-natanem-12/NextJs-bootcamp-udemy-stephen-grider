import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Avatar,
} from "@nextui-org/react";

import React from "react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

const HeaderAuth = function () {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    return null;
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <form action={actions.signIn} className="flex gap-4">
        <Button
          className="bg-transparent text-green-500 text-[16px] border-[1px] border-green-500"
          type="submit"
        >
          Sign In
        </Button>

        <Button
          className="bg-transparent text-green-500 text-[16px] border-[1px] border-green-500"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    );
  }

  return <>{authContent}</>;
};

export default HeaderAuth;
