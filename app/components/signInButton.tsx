"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const SignInButton = () => {
  const router = useRouter();
  const handleSignIn = async () => {
    router.push("/signIn");
  };
  return (
    
      <Button
        variant="outline"
        className="border-purple-400 text-purple-600 hover:bg-purple-50"
        onClick={handleSignIn}
      >
        Sign In
      </Button>
      
    
  );
};

export default SignInButton;
