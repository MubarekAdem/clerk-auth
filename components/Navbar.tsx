"use client";
import React from "react";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="bg-cyan-950 rounded-b-xl">
      <ul className="flex justify-between py-4 px-6">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/client">
            <li>Client</li>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          {!isSignedIn ? (
            <>
              <Link href="/sign-in">
                <li>Login</li>
              </Link>
              <Link href="/sign-up">
                <li>Sign up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
