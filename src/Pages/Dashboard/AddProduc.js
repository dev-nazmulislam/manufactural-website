import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const AddProduc = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/items").then((res) => res.json())
  );

  const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";

  const onSubmit = async (data) => {
    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("Doctor added successfully");
          reset();
        } else {
          toast.error("Failed to add the doctor");
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full mx-3 mx-auto">
      <h2 className="text-2xl">Add a New Product</h2>
      <form className="mx-3 md:mx-12" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full"
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Type</span>
          </label>
          <input
            type="text"
            placeholder="Product Type"
            className="input input-bordered w-full"
            {...register("product_type", {
              required: {
                value: true,
                message: "Product Type is Required",
              },
            })}
          />
          <label className="label">
            {errors.product_type?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.product_type.message}
              </span>
            )}
          </label>
        </div>
        <div className="flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              className="input input-bordered w-full"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              {...register("abalableQuantity", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.abalableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.abalableQuantity.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered w-full"
            {...register("orderQuantity", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
            })}
          />
          <label className="label">
            {errors.orderQuantity?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.orderQuantity.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            placeholder="Short Description"
            className="input input-bordered w-full"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Photo</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("img", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
        </div>

        <input className="btn w-full" type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduc;
