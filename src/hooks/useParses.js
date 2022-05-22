import { useEffect, useState } from "react";

const useParses = () => {
  const [parts, setParses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setParses(data));
  }, []);

  return [parts, setParses];
};

export default useParses;
