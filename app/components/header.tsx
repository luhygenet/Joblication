"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth";

const Header = () => {
  const { data: session, status } = useSession();
  // server components can be used with async while client ones can't

  // Show loading state until session is determined
  //   if (status === "loading") {
  //     return (
  //       <header className="bg-white shadow-">
  //         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //           <div className="flex justify-between h-16 items-center">
  //             <Link href="/" className="text-xl font-bold">
  //               Your Logo
  //             </Link>
  //             <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
  //             <div className="flex justify-between space-x-8">
  //               <Link href="/" className="hover:text-blue-600">
  //                 Home
  //               </Link>
  //               <Link href="/" className="hover:text-blue-600">
  //                 About
  //               </Link>
  //               <Link href="/" className="hover:text-blue-600">
  //                 Contact
  //               </Link>
  //             </div>
  //           </div>
  //         </nav>
  //       </header>
  //     );
  //   }

  return (
    <header className="bg-white shadow-">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            Your Logo
          </Link>
          {status === "loading" ? (
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          ) : (
            <p className="text-sm text-gray-700">
              {session?.user?.name || "Not signed in"}
            </p>
          )}

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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
