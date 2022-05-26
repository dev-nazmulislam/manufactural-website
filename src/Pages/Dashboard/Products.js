import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <section className="card h-100%">
      <ul className="menu lg:menu-horizontal w-full bg-slate-200 ">
        <li>
          <Link to="/dashboard/product" className="btn btn-link text-accent">
            All Products
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/product/add"
            className="btn btn-link text-accent"
          >
            Add Products
          </Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </section>
  );
};

export default Products;
