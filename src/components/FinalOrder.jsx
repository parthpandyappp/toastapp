import { useSelector, useDispatch } from "react-redux";
import { alreadyAdded, getQty } from "../helpers";
import {
  addToCurrentOrders,
  decrementOrderQty,
  incrementOrderQty,
} from "../features";

const FinalOrder = ({ dish }) => {
  const dispatch = useDispatch();
  const { currentOrders } = useSelector((state) => state.orders);
  const qty = getQty(dish, currentOrders);
  return (
    <section class="flex items-center justify-between p-1 rounded">
      <span class="flex gap-2 items-center">
        <p
          class={`border-2 w-6 h-6 flex items-center justify-center rounded ${
            dish.isVeg
              ? "border-green-600 text-green-600"
              : "border-red-600 text-red-600"
          } font-bold text-3xl`}
        >
          •
        </p>
        <span>
          <p class="text-gray-500 font-bold">{dish.item}</p>
          <p class="text-sm font-bold text-gray-500">₹{dish.price}</p>
        </span>
      </span>
      {alreadyAdded(dish, currentOrders) ? (
        <span class="flex gap-2 justify-center items-center border w-24 rounded-xl p-1 ">
          <p
            class="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4] cursor-pointer"
            onClick={() => dispatch(decrementOrderQty(dish))}
          >
            -
          </p>
          <p className="text-sm text-gray-500 font-semibold">{qty}</p>
          <p
            class="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4] cursor-pointer"
            onClick={() => dispatch(incrementOrderQty(dish))}
          >
            +
          </p>
        </span>
      ) : (
        <button
          class="flex gap-2 items-center border rounded-md text-sm p-1 font-bold text-gray-500 cursor-pointer"
          onClick={() => dispatch(addToCurrentOrders({ ...dish, qty: 1 }))}
        >
          <p class="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4]">
            +
          </p>
          ADD
        </button>
      )}
    </section>
  );
};

export { FinalOrder };
