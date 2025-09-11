import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <header className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 text-white font-bold flex items-center justify-center rounded-lg">
              H
            </div>
            <span className="font-semibold text-lg">HomePro</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/posts" className="hover:text-indigo-600">
              Posts
            </Link>
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="text-sm px-4 py-2 bg-white border rounded-xl shadow-sm">
              Log in
            </button>
            <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-xl shadow">
              Sign up
            </button>
          </div>
        </header>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
