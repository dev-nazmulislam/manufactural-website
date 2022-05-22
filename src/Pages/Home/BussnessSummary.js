import React from "react";
import { BsFlag } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFeedback } from "react-icons/md";

const BussnessSummary = () => {
  return (
    <section className="mx-2 md:mx-12 my-12">
      <h1 className="text-center text-xl md:text-4xl font-bold text-secondary uppercase">
        Milions Bussiness Trust Us
      </h1>
      <p className="uppercase text-center text-base md:text-xl">
        Try To Understand Users Expectation
      </p>
      <div className="flex justify-center my-4">
        <hr className="w-2/12 h-1 bg-secondary" />
        <hr className="w-1/12 h-1 mx-4 bg-secondary" />
        <hr className="w-8 h-1 bg-secondary" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8">
        <div className="flex flex-col text-2xl text-center gap-4 text-primary items-center">
          <BsFlag />
          <span className="text-4xl text-black font-bold">72</span>
          <h1>Countries</h1>
        </div>
        <div className="flex flex-col text-2xl text-center gap-4 text-primary items-center">
          <GrProjects />
          <span className="text-4xl text-black font-bold">535+</span>
          <h1>Complate Projects</h1>
        </div>
        <div className="flex flex-col text-2xl text-center gap-4 text-primary items-center">
          <FiUsers />
          <span className="text-4xl text-black font-bold">273+</span>
          <h1>Happy Clients</h1>
        </div>
        <div className="flex flex-col text-2xl text-center gap-4 text-primary items-center">
          <MdOutlineFeedback />
          <span className="text-4xl text-black font-bold">432+</span>
          <h1>Feedbacks</h1>
        </div>
      </div>
      <div className="hero py-10 bg-white card">
        <div className="hero-content px-0 flex-col lg:flex-row gap-4">
          <div className="w-full md: w-1/2">
            <h1 className="text-xl md:text-4xl font-bold text-secondary">
              Have any question about us or get a product request?
            </h1>
            <p className="py-2 text-xl">Don't hesitate to contact us.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-around gap-4 w-full md:w-1/2">
            <button className="btn btn-secondary text-white text-base md:text-xl">
              Request for Quote
            </button>
            <button className="btn btn-accent text-white text-base md:text-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BussnessSummary;
