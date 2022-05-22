import React from "react";
import { Link, useLocation } from "react-router-dom";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";
import CustomLink from "../CustomLink/CustomLink";
import useScroll from "../../../hooks/useScroll";

const Navbar = () => {
  const location = useLocation();
  const [navbar] = useScroll(false);

  return (
    <div className="banner">
      <div
        className={`navbar fixed top-0 stocl ${
          navbar ? "navbg" : "navbgfalse"
        }`}
      >
        <div
          className={`navbar fixed top-0 stocl ${
            navbar ? "navbg" : "navbgfalse"
          }`}
        >
          <div className="mr-auto">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                {<MenuItems />}
              </ul>
            </div>
            <CustomLink to="/" className="btn btn-ghost text-xl list-none">
              Nr Computers
            </CustomLink>
          </div>
          <div className="ml-auto hidden lg:flex">
            <ul className="menu menu-horizontal mr-5 p-0 flex items-center">
              {<MenuItems />}
            </ul>
          </div>
        </div>
      </div>

      {location.pathname !== "/" &&
      location.pathname !== "/home" &&
      location?.pathname.split("/").length !== 4 ? (
        <section className="pt-20 pb-5">
          <h1 className="text-center text-4xl text-white uppercase">
            {location.pathname.substr(1)}
          </h1>
          <p className="flex justify-center text-xl text-white items-center">
            <Link className="mr-2" to="/">
              <AiFillHome />
            </Link>
            {location.pathname}
          </p>
        </section>
      ) : (
        <section className="pt-20 pb-5">
          <h1 className="text-white font-semibold text-lg md:text-2xl  lg:text-4xl mt-5 text-center">
            Welcome to Nr Computers
          </h1>
          <p className="text-white text-sm md:text-lg  lg:text-xl text-center my-2">
            Get all Computers pars with holsell price.
          </p>
          <div className="flex justify-center my-5">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Learn more
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Navbar;
