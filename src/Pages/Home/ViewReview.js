import React from "react";
import "./ViewReview.css";
import { FaUserAlt, FaReply } from "react-icons/fa";
import { IoIosHeartDislike } from "react-icons/io";

const ViewReview = ({ review }) => {
  const { name, description, img, time } = review;

  return (
    <div className="comment">
      <div className="flex flex-col md:flex-row items-center w-100">
        <div className="comment-profile my-5">
          {img ? (
            <img src={img} alt="" />
          ) : (
            <FaUserAlt className="profile-img" />
          )}
        </div>
        <div className="ml-3 bg-slate-100 p-2 w-full">
          <div className="flex justify-between mb-3">
            <h4>
              {name} (<span className="text-xl">{time}</span>)
            </h4>
            <div>
              <IoIosHeartDislike className="mx-1" />
              <FaReply className="mx-1" />
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewReview;
