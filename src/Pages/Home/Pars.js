import React from "react";
import useParses from "../../hooks/useParses";
import ShowPars from "./ShowPars";

const Pars = () => {
  const [parts] = useParses();
  return (
    <section className="mx-4 md:mx-12">
      <h1 className="text-2xl md:text-4xl text-primary text-center  my-12">
        Our Best Selling Parts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map((part) => (
          <ShowPars key={part._id} part={part} />
        ))}
      </div>
    </section>
  );
};

export default Pars;
