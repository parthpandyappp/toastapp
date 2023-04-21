import { useSelector, useDispatch } from "react-redux";
import { alreadyAdded, getQty } from "../helpers";
import {
  addToCurrentOrders,
  decrementOrderQty,
  incrementOrderQty,
} from "../features";

const MainDishCard = ({ dish }) => {
  const dispatch = useDispatch();
  const { currentOrders } = useSelector((state) => state.orders);
  const qty = getQty(dish, currentOrders);
  return (
    <section class="flex items-center gap-2 w-full shadow-inner rounded-md p-1 bg-[#F6F6F6]">
      {dish.img.length > 0 && (
        <img src={dish.img} alt="" class="w-20 h-16 object-cover rounded" />
      )}
      <article class="w-full  flex flex-col justify-between p-2">
        <p class="text-gray-500 font-bold">{dish.item}</p>
        <span class="flex justify-between items-center">
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
            <p className="text-sm font-bold text-gray-500">₹299</p>
          </span>
          {alreadyAdded(dish, currentOrders) ? (
            <span class="flex gap-2 justify-center items-center border w-24 rounded-xl p-1 bg-[#F0F0F3] shadow-md">
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
              class="flex gap-2 bg-[#F0F0F3] items-center border rounded-md text-sm p-1 font-bold text-gray-500 cursor-pointer shadow-md"
              onClick={() => dispatch(addToCurrentOrders({ ...dish, qty: 1 }))}
            >
              <p class="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4]">
                +
              </p>
              ADD
            </button>
          )}
        </span>
      </article>
    </section>
  );
};

export { MainDishCard };
