import React from "react";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
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
