import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.Init";
import CustomLink from "../CustomLink/CustomLink";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useOrders from "../../../hooks/useOrders";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const [user] = useAuthState(auth);
  const [orders] = useOrders();
  const userOrders = orders.map((order) => order?.email == user?.email);

  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/pars">Parts</CustomLink>
      <CustomLink to="/protfolio">Protfolio</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      <CustomLink to="/about">About Us</CustomLink>
      <CustomLink to="/cart" className="mr-2">
        <div className="indicator">
          <span className="indicator-item badge">{userOrders.length}</span>
          <button className="text-2xl">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </CustomLink>
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex="1">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  alt="Profile pic"
                />
              </div>
            </div>
          </label>
          <ul
            tabIndex="1"
            className="dropdown-content p-2 shadow bg-base-100 rounded-box w-72"
          >
            <li>
              <a href="/">
                <div className="avatar flex flex-col justify-center items-center">
                  <div className="w-24 rounded-full ring ring-primary ">
                    <img
                      src="https://api.lorem.space/image/face?hash=3174"
                      alt="Profile pic"
                    />
                  </div>
                  <p>
                    <small>nazmulislamnr@gmail.com</small>
                  </p>
                </div>
              </a>
            </li>
            <li>
              <Link
                to="dashboard/account"
                class="text-base w-full link-accent no-underline"
              >
                Manage Account
              </Link>
            </li>
            <li>
              <Link to="/dashboard" class="w-full link-accent no-underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard" class="w-full link-accent no-underline">
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/manageProduct"
                class="w-full link-accent no-underline"
              >
                Manage Product
              </Link>
            </li>
            <li>
              <span className="w-full" onClick={() => signOut(auth)}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
};

export default MenuItems;
