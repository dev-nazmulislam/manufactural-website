import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaComment, FaCartPlus } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./ShowPars.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.Init";
import useOrders from "../../hooks/useOrders";

const ShowPars = ({ part }) => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  const { name, price, abalableQuantity, description, img, orderQuantity } =
    part;
  const [order, setOrder] = useState(orderQuantity);
  const [orders] = useOrders();

  const navigat = useNavigate();
  const curentOrder = orders.find(
    (o) =>
      o.product_type === part.product_type &&
      email === o.email &&
      o.orderStatus === "Pandding"
  );

  const makeOrder = () => {
    if (order >= orderQuantity && order <= abalableQuantity) {
      const newOrder = part;
      newOrder.quantity = order;
      newOrder.email = email;
      newOrder.time = Date().toLocaleString();
      fetch(`http://localhost:5000/orders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success === true) {
          } else {
            alert("Already exist update your order");
          }
        });
      navigat("/dashboard/purchase");
    } else {
      alert("Make sure youre Order Quantity");
    }
  };

  // Product Add to cart
  const addToCart = () => {
    const newOrder = part;
    newOrder.quantity = order;
    newOrder.email = email;
    newOrder.time = Date().toLocaleString();
    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((result) => {});
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div
        className="hero card"
        style={{
          backgroundImage: `url(${img[0]})`,
        }}
      >
        <div className="hero-overlay  bg-opacity-10"></div>
        <div className="w-full">
          <div className="flex justify-end relative h-48">
            <ul className="menu bg-base-300 rounded-box absolute like-container">
              <li>
                <a>
                  <div className="text-2xl">
                    <FcLike />
                  </div>
                  <span>Like</span>
                </a>
              </li>
              <li>
                <a>
                  <div className="text-2xl">
                    <FaComment />
                  </div>
                  <span>Comment</span>
                </a>
              </li>
              <li>
                <a>
                  <div className="text-2xl">
                    <BiShare />
                  </div>
                  <span>Shire</span>
                </a>
              </li>
              <li>
                <a onClick={addToCart}>
                  {curentOrder ? (
                    <div className="text-green-400 text-2xl">
                      <BsFillCartCheckFill />
                    </div>
                  ) : (
                    <FaCartPlus />
                  )}
                  <span>{curentOrder ? "Added" : "Add to cart"}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5 items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p title={description}>
          <small>{description.slice(0, 100)}...</small>
        </p>
        <div className="flex justify-between w-full my-2 text-red-500">
          <p>Abalable Quantity: {abalableQuantity}</p>
          <p>Price per unit: {price}</p>
        </div>
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Order Quantity</span>
            </label>
            <input
              type="number"
              onBlur={(e) => setOrder(e.target.value)}
              placeholder={`Minimum Order: ${orderQuantity}`}
              className="input input-bordered w-full mb-5"
            />
          </div>
        </div>
        <div className="card-actions content-end">
          <button
            onClick={() => makeOrder()}
            className="btn btn-primary text-white font-bold w-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPars;
