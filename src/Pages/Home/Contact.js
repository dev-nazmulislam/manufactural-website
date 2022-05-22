import React from "react";
import banner from "../../assets/images/contactbanner.jpg";

const Contact = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-primary px-2 md:px-10 py-14  "
    >
      <div className="text-center pb-14 text-white">
        <p className="text-base md:text-xl font-bold bg-clip-text">
          Contact Us
        </p>
        <h1 className="text-xl md:text-4xl">Stay connected with us</h1>
      </div>
      <div className="card p-5 bg-slate-400 w-full md:w-1/2 mx-auto">
        <div className="grid grid-cols-1 justify-items-center gap-5">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-full"
          />
          <input type="text" placeholder="Subject" className="input w-full" />
          <textarea
            className="textarea w-full"
            placeholder="Your message"
            rows={6}
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary text-white text-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
