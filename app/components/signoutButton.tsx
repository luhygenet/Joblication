"use client";
import { signOut } from "next-auth/react";
import React from "react";
import useUnifiedAuth from "../hooks/useUnifiedAuth";

const SignOutButton = () => {
  const { logout } = useUnifiedAuth();
  // const handleSignOut = async () => {
  //   await signOut({ callbackUrl: "/" });
  // };
  return (
    <>
      <button
        className="btn-job border-1 border-b-purple-600 text-purple-600 text-md"
        onClick={logout}
      >
        Sign Out
      </button>
    </>
  );
};

export default SignOutButton;
