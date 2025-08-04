import { NavLink, Link } from "react-router-dom";
import Abaut from "../pages/Abaut";
import Hoom from "../pages/Hoom";
import Contact from "../pages/Contact";
import { FaShapes, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const { totalAmount, cart, dispatch } = useGlobalContext();
  return (
    <header className="continer flex justify-between mt-10">
      <div>
        <h2>
          <Link to="/"> logo</Link>
        </h2>
      </div>
      <nav>
        <div className=" flex gap-5">
          <NavLink to={"/"}>Hoom</NavLink>
          <NavLink to={"/about"}>Abaut</NavLink>
          <NavLink to={"/Contact"}>Contact</NavLink>
        </div>
      </nav>
      <div className="flex gap-5 items-center">
        <div className="relative mb-4 group heder__cart">
          <span className="heder__cart__indicator">{totalAmount}</span>
          <FaShoppingCart className="text-4xl" />

          <div className="from__cart absolute top-full right-8 hidden group-hover:block bg-white shadow-lg p-4 z-10 w-64 flex  felx flex-col justify-center items-center  ">
            {cart.length > 0 ? (
              cart.map((item) => {
                const { id, title, price, amount, thumbnail } = item;
                return (
                  <div
                    key={id}
                    className="cart-item flex gap-2 items-center mb-3 border-b pb-2"
                  >
                    <img
                      src={thumbnail}
                      alt={title}
                      width={50}
                      height={50}
                      className="object-cover"
                    />
                    <div className="mb-10">
                      <h4 className="font-semibold text-sm">{title}</h4>

                      <p className="text-xs text-gray-600">Amount: {amount}</p>
                      <p className="text-xs text-gray-600">
                        {amount} ${price * amount}
                      </p>
                    </div>
                    <button
                      className="text-black"
                      onClick={() => dispatch({ type: "DELETE", payload: id })}
                    >
                      <MdDelete className="text-2xl text-black" />
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="text-red-500 text-sm">Cart is empty</p>
            )}

            {cart.length > 0 && (
              <div className="flex justify-center w-full mt-2">
                <button
                  className="btn btn-neutral mt-2"
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  {" "}
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Navbar;
