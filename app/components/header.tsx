import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            Your Logo
          </Link>
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
