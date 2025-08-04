import React from "react";
import Product from "./Product";

import { useGlobalContext } from "../hooks/useGlobalcontext";

function Productlist({ products }) {
  const { totalPrice, dispatch } = useGlobalContext();
  return (
    <div className="card-continer ">
      <div className="card-continer__heder flex justify-between mt-10">
        <p className="card-continer__title text-3xl">Product List:</p>
        <div className="card-continer__price__btn flex gap-5 items-center">
          <span className="card-continer__price text-2xl">
            {" "}
            Total Price: ${totalPrice.toFixed(2)}{" "}
          </span>
          <button
            className="btn btn-neutral"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            {" "}
            Clear
          </button>
        </div>
      </div>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Productlist;
