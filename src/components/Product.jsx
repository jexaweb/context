import { MdShoppingBasket } from "react-icons/md";

import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ product }) {
  const { dispatch, cart } = useGlobalContext();
  const itemIncart = cart.find((item) => item.id === product.id);
  return (
    <div className=" mb-10 mt-10 bg-blue-500 hover:shadow-xl/30 pt-8 pb-8 pr-10 flex  rounded-lg ">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="card__image "
        width={180}
      />
      <div className="mr-auto">
        <h5 className="text-2xl mt-20">{product.title}</h5>
        <small className="text-3xl text-red-300">Price: ${product.price}</small>
      </div>
      <div className="flex gap-5 items-center">
        {!itemIncart && (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...product, amount: 1 },
              })
            }
            className="btn card__btn"
          >
            <MdShoppingBasket className="text-3xl" />
            Add
          </button>
        )}
        {itemIncart && (
          <div className="flex gap-5 items-center">
            <button
              className="btn btn-accent"
              onClick={() => {
                if (itemIncart.amount === 1) {
                  dispatch({ type: "DELETE", payload: itemIncart.id });
                } else {
                  dispatch({ type: "DECREASE", payload: itemIncart.id });
                }
              }}
            >
              &#8722;
            </button>
            <span className="amount">{itemIncart.amount}</span>
            <button
              className="btn btn-accent"
              onClick={() => {
                dispatch({ type: "INCREASE", payload: itemIncart.id });
              }}
            >
              &#43;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
