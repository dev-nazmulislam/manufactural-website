import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-reef-99416.herokuapp.com/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  return [orders, setOrders];
};

export default useOrders;
