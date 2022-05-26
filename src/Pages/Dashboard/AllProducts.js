import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import ShowProduct from "./ShowProduct";

const AllProducts = () => {
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery("items", () =>
    fetch("https://enigmatic-reef-99416.herokuapp.com/items", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl py-5 text-center">
        Availabele Products: {items.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Abalable Qunatity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product, index) => (
              <ShowProduct
                key={product._id}
                product={product}
                index={index}
                refetch={refetch}
              ></ShowProduct>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
