import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

const ShowOrders = ({ order, index, updateOrder }) => {
  return (
    <tr>
      <th className="text-lg">{index + 1}</th>
      <td className="text-lg">
        <img src={order.img[0]} alt="" />
      </td>
      <td className="text-lg">{order.name}</td>
      <td className="text-lg">{order.price}</td>
      <td className="text-lg">{order.quantity}</td>
      <td className="text-lg">{order.orderStatus}</td>
      <td className="text-4xl text-primary">
        <BiEdit />
      </td>
      <td
        onClick={() => updateOrder(order, order._id)}
        className="text-4xl text-red-500 "
      >
        <RiDeleteBinLine />
      </td>
    </tr>
  );
};

export default ShowOrders;
