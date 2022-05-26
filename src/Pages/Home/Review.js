import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.Init";
import ViewReview from "./ViewReview";

const Review = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  const [descriptionField, setDescription] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const name = user?.displayName;
  const img = "https://i.ibb.co/M8pgDX9/1024px-User-avatar-svg.png";
  const time = Date().toLocaleString();
  const description = descriptionField;

  useEffect(() => {
    fetch("https://enigmatic-reef-99416.herokuapp.com/reviewCount")
      .then((res) => res.json())
      .then((data) => setPageCount(Math.ceil(data.count / 3)));
  }, []);

  useEffect(() => {
    fetch(`https://enigmatic-reef-99416.herokuapp.com/reviews?page=${page}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [page]);

  const handleComment = () => {
    if (!user) {
      navigate("/login");
    } else {
      const review = { name, img, time, description };
      fetch("https://enigmatic-reef-99416.herokuapp.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          const newReview = [...reviews, review];
          setReviews(newReview);
          alert("Comment successfully");
        });
    }
  };

  return (
    <div className="mx-2 md:mx-12 my-12">
      <div className="my-5">
        <hr />
        <hr />
        <h4 className="text-xl md:text-2xl text-primary my-5">
          Add Your Valueable Review!!
        </h4>
        <div className="flex my-4">
          <hr className="w-2/12 h-1 bg-secondary" />
          <hr className="w-1/12 h-1 mx-4 bg-secondary" />
          <hr className="w-8 h-1 bg-secondary" />
        </div>
        <textarea
          onBlur={(e) => setDescription(e.target.value)}
          id=""
          rows="5"
          //   style={{ width: "75%" }}
          className="input-bordered rounded w-full md:w-9/12"
        ></textarea>
        <br />
        <button
          onClick={handleComment}
          className="btn btn-primary  text-white font-bold my-2"
        >
          Add Review
        </button>
        <hr />
        <hr />
      </div>
      <div>
        {reviews.map((review) => (
          <ViewReview key={review._id} review={review} />
        ))}
      </div>
      <div className="flex justify-center">
        {[...Array(pageCount).keys()].map((number, i) => (
          <button
            key={i}
            onClick={() => setPage(number)}
            className={`mr-2 ${
              page === number ? "bg-primary text-slate-100" : "bg-slate-100"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Review;
