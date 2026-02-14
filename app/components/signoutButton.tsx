"use client";
import { signOut } from "next-auth/react";
import React from "react";
import useUnifiedAuth from "../hooks/useUnifiedAuth";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  const { logout } = useUnifiedAuth();
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <Button
        variant="outline"
        className="border-purple-400 text-purple-600 hover:bg-purple-50"
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </>
  );
};

export default SignOutButton;
