import React from "react";
import BussnessSummary from "./BussnessSummary";
import Contact from "./Contact";
import Products from "./Products";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Products />
      <BussnessSummary />
      <Contact></Contact>
      <Review />
    </div>
  );
};

export default Home;
