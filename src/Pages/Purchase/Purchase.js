import React from "react";
import { Link, Outlet } from "react-router-dom";
import useUserOrder from "../../hooks/useUserOrder";
import "./Purchase.css";

const Purchase = () => {
  const [orders] = useUserOrder("Pandding");
  return (
    <div className="w-full">
      <ul className="menu menu-horizontal w-full bg-base-100">
        <li>
          <Link to="/dashboard/purchase">All</Link>
        </li>
        <li>
          <Link to="/dashboard/purchase/pandding">Pandding</Link>
        </li>
        <li>
          <Link to="/dashboard/purchase/cancelled">Cancelled</Link>
        </li>
        <li>
          <Link to="/dashboard/purchase/complate">Complate</Link>
        </li>
      </ul>
      <div className="overflow-x-auto">
        <table className="table w-full zoom">
          <thead>
            <tr>
              <th className="text-xl">#</th>
              <th className="text-xl">Photo</th>
              <th className="text-xl">Product</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Quantity</th>
              <th className="text-xl">Status</th>
              <th className="text-xl">Update</th>
              <th className="text-xl">Cancelle</th>
              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <Outlet />
          <div>
            <p>Product:{orders.reduce((n, i) => n + 1, 0)}</p>
            <p>
              Quantity:
              {orders.reduce((n, { quantity }) => n + quantity, 0)}
            </p>
            <h1>
              Price:
              {orders.reduce(
                (n, { quantity, price }) => n + quantity * price,
                0
              )}
            </h1>
          </div>
        </table>
      </div>
    </div>
  );
};

export default Purchase;
