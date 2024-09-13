/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItemButton from "./DeleteItemButton";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getItemQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { name, quantity, totalPrice, pizzaId } = item;
  const currentQuantity = useSelector((state) =>
    getItemQuantityById(state, pizzaId),
  );

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex flex-wrap items-center gap-3">
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteItemButton pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
