"use client"
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInButton = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    router.push("/signIn");
  };
  return (
    <button
      className="btn-job border-1 border-b-purple-600 text-purple-600 text-md"
      onClick={handleSignIn}
    >
      Sign In
    </button>
  );
};

export default SignInButton;
