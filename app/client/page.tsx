"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

const ClientPage = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }
  return (
    <div className="h-full flex-col items-center justify-center text-2xl">
      Hello, {user.firstName} welcome to clerk
    </div>
  );
};

export default ClientPage;
