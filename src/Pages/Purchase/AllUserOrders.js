import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import "./Purchase.css";
import ShowOrders from "./ShowOrders";

const AllUserOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-reef-99416.herokuapp.com/orders")
      .then((result) => result.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const updateOrder = (item, id) => {
    // delete item._id;
    item.orderStatus = "Cancelled";

    fetch(`https://enigmatic-reef-99416.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("item Updated successfully!!!");
      });
  };

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // Send delete data to server
      const url = `https://enigmatic-reef-99416.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = orders.filter((o) => o._id !== id);
          setOrders(remaining);
        });
    }
  };
  return (
    <div className="w-full">
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
          <tbody>
            {orders.map((order, index) => (
              <ShowOrders
                key={order._id}
                index={index}
                updateOrder={updateOrder}
                deleteOrder={deleteOrder}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserOrders;
