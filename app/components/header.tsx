"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

import { getServerSession } from "next-auth";
import SignOutButton from "./signoutButton";
import SignInButton from "./signInButton";
import useUnifiedAuth from "../hooks/useUnifiedAuth";
import { Button } from "@/components/ui/button";
import { Sign } from "crypto";

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
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-100">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Joblication
        </Link>
        {isLoggedin && (
          <>
            <div>
              <p className="text-md text-gray-700">
                Welcome! {user?.name || "Not signed in"}
              </p>
            </div>
          </>
        )}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-slate-700 hover:text-slate-900 transition"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-slate-700 hover:text-slate-900 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/contact"
            className="text-slate-700 hover:text-slate-900 transition"
          >
            Contact
          </Link>
          {isLoggedin ? <SignOutButton /> : <SignInButton />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
