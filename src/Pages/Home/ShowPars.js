import React from "react";
import { FcLike } from "react-icons/fc";
import { FaComment, FaCartPlus } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import "./ShowPars.css";

const ShowPars = ({ part }) => {
  const { name, price, abalableQuantity, description, img, orderQuantity } =
    part;

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
                  <FcLike />
                  <span>Like</span>
                </a>
              </li>
              <li>
                <a>
                  <FaComment />
                  <span>Comment</span>
                </a>
              </li>
              <li>
                <a>
                  <BiShare />
                  <span>Shire</span>
                </a>
              </li>
              <li>
                <a>
                  <FaCartPlus />
                  <span>Add to cart</span>
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
              placeholder={`Minimum Order: ${orderQuantity}`}
              className="input input-bordered w-full mb-5"
            />
          </div>
        </div>
        <div className="card-actions content-end">
          <button className="btn btn-primary text-white font-bold w-full">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPars;
