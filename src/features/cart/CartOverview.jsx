import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector((state) => getTotalCartQuantity(state));
  const totalCartPrice = useSelector((state) => getTotalCartPrice(state));

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        {totalCartPrice && totalCartPrice ? (
          <>
            <span>{totalCartQuantity || "0"} pizzas</span>
            <span>${totalCartPrice || "0"}</span>
          </>
        ) : (
          "Your cart is empty"
        )}
      </p>
      <Link to="/cart" className="tracking-wide">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
