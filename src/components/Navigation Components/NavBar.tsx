"use client";
import React, { Suspense, useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 flex w-full items-center justify-between gap-4 px-[4%] py-5 transition-all duration-1000 md:px-[8%] ${
        scrolled ? "shadow-md backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-6">
        <img
          loading="lazy"
          src={`https://cdn.builder.io/api/v1/image/assets/TEMP/b7455439cda4de62a95340ca36c92638191549fc312ca4930a196d319dfe562b?placeholderIfAbsent=true&apiKey=${process.env.IMAGE_KEY}`}
          alt="Logo"
          className="h-auto w-8 object-contain"
        />
        <span className="hidden text-xl font-semibold md:block">
          MyMovieList
        </span>
      </div>
      <Suspense>
        <SearchBar />
      </Suspense>

      {/* Sign in and Menu Icon */}
      <div className="flex items-center gap-6">
        <button className="hidden whitespace-nowrap text-lg hover:underline md:block">
          Sign in
        </button>
        <img
          loading="lazy"
          src={`https://cdn.builder.io/api/v1/image/assets/TEMP/c978a17026e05e5d67d00e99efc056308202b42f22b31eea4597114395051c6b?placeholderIfAbsent=true&apiKey=${process.env.IMAGE_KEY}`}
          alt="Menu icon"
          className="h-auto w-8 object-contain"
        />
      </div>
    </div>
  );
};

export default NavBar;
