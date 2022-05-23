import React from "react";
import BussnessSummary from "./BussnessSummary";
import Contact from "./Contact";
import Pars from "./Pars";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Pars />
      <BussnessSummary />
      <Contact></Contact>
      <Review />
    </div>
  );
};

export default Home;
