"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

import { getServerSession } from "next-auth";
import SignOutButton from "./signoutButton";
import SignInButton from "./signInButton";
import useUnifiedAuth from "../hooks/useUnifiedAuth";

// function SignOut() {
//   return (
//     <form
//       action={async () => {
//         'use server';
//         await signOut();
//       }}
//     >
//       <button type="submit">Sign out</button>
//     </form>
//   );
// }
const Header = () => {
  // const { data: session, status } = useSession();
  const [hasMounted, setHasMounted] = useState(false);
  const { isLoggedin, logout, user } = useUnifiedAuth();
  // server components can be used with async while client ones can't
  // const session = await getServerSession();
  // if (!user && !isLoggedin) {
  //   return <p>Loading...</p>; // show while checking localStorage or NextAuth session
  // }
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <header className="bg-white shadow-">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10 items-center">
          {/* {status === "loading" ? (
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          ) : (
            <p className="text-sm text-gray-700">
              {session?.user?.name || "Not signed in"}
            </p>
          )} */}
          {isLoggedin ? (
            <>
              <div>
                <p className="text-md text-gray-700">
                  Welcome! {user?.name || "Not signed in"}
                </p>
              </div>
            </>
          ) : (
            <SignInButton />
          )}{" "}
          <div>
            <div className="flex justify-between space-x-8">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link href="/" className="hover:text-blue-600">
                About
              </Link>
              <Link href="/" className="hover:text-blue-600">
                Contact
              </Link>
              {isLoggedin ? <SignOutButton /> : <>{/* <p>Sign in</p> */}</>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
