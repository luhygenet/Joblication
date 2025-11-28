import React from "react";
import GoogleSignUp from "../components/googleSignUp";
import SignUpForm from "../components/signUpForm";
import SignInForm from "../components/signInForm";
import GeneralButton from "../components/generalButton";
import GButton from "../components/generalButton";
import VerificationForm from "../components/verificationForm";


const Verification = () => {
  const OnSubmit = () => {
    console.log("hi")
  }
  return (
    <VerificationForm/>
  );
};

export default Verification;
