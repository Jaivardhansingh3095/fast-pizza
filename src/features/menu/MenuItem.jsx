/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItemQuantityById } from "../cart/cartSlice";
import DeleteItemButton from "../cart/DeleteItemButton";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector((state) =>
    getItemQuantityById(state, id),
  );

  function handleAddCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 px-2 py-2 hover:shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className={`h-28 rounded-sm ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="pt-.5 flex grow flex-col gap-2">
        <p className="font-medium">{name}</p>

        <p className="text-sm font-light capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 text-sm">
          {!soldOut ? (
            <p className="font-medium">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="uppercase text-stone-500">Sold out</p>
          )}
          {!soldOut ? (
            currentQuantity ? (
              <div className="flex items-center gap-1 sm:gap-6">
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
                <DeleteItemButton pizzaId={id} />
              </div>
            ) : (
              <Button type="small" onClick={handleAddCart}>
                Add to cart
              </Button>
            )
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
