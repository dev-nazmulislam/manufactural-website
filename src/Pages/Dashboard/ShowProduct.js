import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

const ShowProduct = ({ product, index }) => {
  const { _id, name, price, img, abalableQuantity } = product;

  const removeProduct = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/items/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={img[0]} alt="" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{abalableQuantity}</td>
      <td>
        <button className="text-4xl text-secondary">
          <BiEdit />
        </button>
      </td>
      <td>
        <button onClick={removeProduct} className="text-4xl text-red-500 ">
          <RiDeleteBinLine />
        </button>
      </td>
    </tr>
  );
};

export default ShowProduct;
