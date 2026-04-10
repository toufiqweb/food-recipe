"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={`
                  group relative px-6 py-3 text-lg font-medium transition-all duration-300
                 ${
                   pathname === "/"
                     ? "text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]"
                     : "text-gray-400 hover:text-white"
                 }
                 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                 after:h-0.75 after:w-0 after:bg-linear-to-r after:from-violet-500 after:to-cyan-500 
                 after:transition-all after:duration-300
                 ${pathname === "/" ? "after:w-8" : "group-hover:after:w-6"}
               `}
                       >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/allFoods"}
          className={`
                group relative px-6 py-3 text-lg font-medium transition-all duration-300
                ${
                  pathname === "/allFoods"
                    ? "text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]"
                    : "text-gray-400 hover:text-white"
                }
                after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
                after:h-0.75 after:w-0 after:bg-linear-to-r after:from-violet-500 after:to-cyan-500 
                after:transition-all after:duration-300
                ${pathname === "/allFoods" ? "after:w-8" : "group-hover:after:w-6"}
              `}
                      >
          All Foods
        </Link>
      </li>
      <li>
        <Link
          href={"/Item"}
          className={`
            group relative px-6 py-3 text-lg font-medium transition-all duration-300
            ${
              pathname === "/Item"
                ? "text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]"
                : "text-gray-400 hover:text-white"
            }
            after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
            after:h-0.75 after:w-0 after:bg-linear-to-r after:from-violet-500 after:to-cyan-500 
            after:transition-all after:duration-300
            ${pathname === "/Item" ? "after:w-8" : "group-hover:after:w-6"}
          `}
                  >
          Item 3
        </Link>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]">Foods</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-transparent bg-clip-text bg-linear-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee]">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
