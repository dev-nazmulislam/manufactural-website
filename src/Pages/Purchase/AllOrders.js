import React from "react";
import useUserOrder from "../../hooks/useUserOrder";
import ShowOrders from "./ShowOrders";

const AllOrders = () => {
  const [orders] = useUserOrder("all");

  const updateOrder = (item, id) => {
    delete item._id;
    item.orderStatus = "Deleted";

    fetch(`http://localhost:5000/update/${id}`, {
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
  return (
    <>
      {orders.map((order, index) => (
        <ShowOrders
          key={order._id}
          index={index}
          updateOrder={updateOrder}
          order={order}
        />
      ))}
    </>
  );
};

export default AllOrders;
