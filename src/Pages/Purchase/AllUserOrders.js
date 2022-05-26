import React from "react";
import useOrders from "../../hooks/useOrders";
import "./Purchase.css";
import ShowAllOrders from "./ShowAllOrders";

const AllUserOrders = () => {
  const [orders, setOrders] = useOrders();

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
              <th className="text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ShowAllOrders
                key={order._id}
                index={index}
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
