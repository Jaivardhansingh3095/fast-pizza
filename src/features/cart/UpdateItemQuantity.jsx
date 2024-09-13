/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decItemQuantity, incItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-4">
      <Button type="remove" onClick={() => dispatch(decItemQuantity(pizzaId))}>
        remove
      </Button>
      <span className="text-lg font-semibold">{currentQuantity}</span>
      <Button type="add" onClick={() => dispatch(incItemQuantity(pizzaId))}>
        add
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
