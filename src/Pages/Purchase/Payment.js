import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.Init";
import { BiEdit } from "react-icons/bi";
import "./Payment.css";

const Payment = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="mx-2 md:mx-12 zoom">
      <div className="bg-slate-200 py-3 px-2">
        <h1 className="text-xl">
          Shipping Address{" "}
          <span className="text-lg">
            (Please select only one! shipping address)
          </span>
        </h1>
        <hr className="w-full h-0.5 bg-primary mt-2 " />
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center bg-white py-5 px-3">
        <div className="flex items-center w-full md:w-2/12">
          <div>
            <img src={user?.photoURL} alt="" />
          </div>
          <div>
            <h1>Dhaka</h1>
            <h1>(Home)</h1>
          </div>
        </div>
        <div className="">
          <h1>Name: {user?.displayName} </h1>
          <h1>Phone: {user?.phoneNumber}</h1>
          <p>Email: {user?.email}</p>
          <p>
            20/3 বাবর রোড, মোহাম্মদপুর, ঢাকা-1207 মোহাম্মদপুর , ঢাকা, বাংলাদেশ।
          </p>
        </div>
        <div>
          <button className="flex btn btn-primary text-white px-12 text-2xl">
            <BiEdit />
            <span className="ml-2">Edit</span>
          </button>
        </div>
      </div>
      <div className="bg-slate-200 py-3 px-2">
        <h1 className="text-xl">
          Payment Method{" "}
          <span className="text-lg">
            ((Please select only one! payment method))
          </span>
        </h1>
        <hr className="w-full h-0.5 bg-primary mt-2 " />
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center bg-white py-5 px-3">
        <h1>Bkash</h1>
      </div>
    </div>
  );
};

export default Payment;
