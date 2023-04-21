import { useSelector, useDispatch } from "react-redux";
import { alreadyAdded, getQty } from "../helpers";
import {
  addToCurrentOrders,
  decrementOrderQty,
  incrementOrderQty,
} from "../features";
import { motion } from "framer-motion";

const CurrentOrder = ({ dish }) => {
  const dispatch = useDispatch();
  const { currentOrders } = useSelector((state) => state.orders);
  const qty = getQty(dish, currentOrders);
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className="flex items-center justify-between p-1 rounded"
    >
      <span className="flex gap-2 items-center">
        <p
          className={`border-2 w-6 h-6 flex items-center justify-center rounded ${
            dish.isVeg
              ? "border-green-600 text-green-600"
              : "border-red-600 text-red-600"
          } font-bold text-3xl`}
        >
          •
        </p>
        <span>
          <p className="text-gray-500 font-bold">{dish.item}</p>
          <p className="text-sm font-bold text-gray-500">₹{dish.price}</p>
        </span>
      </span>
      {alreadyAdded(dish, currentOrders) ? (
        <span className="flex gap-2 justify-center items-center border w-24 rounded-xl p-1 bg-[#F0F0F3] shadow-md">
          <p
            className="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4] cursor-pointer"
            onClick={() => dispatch(decrementOrderQty(dish))}
          >
            -
          </p>
          <p className="text-sm text-gray-500 font-semibold">{qty}</p>
          <p
            className="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4] cursor-pointer"
            onClick={() => dispatch(incrementOrderQty(dish))}
          >
            +
          </p>
        </span>
      ) : (
        <button
          className="flex gap-2 bg-[#F0F0F3] items-center border rounded-md text-sm p-1 font-bold text-gray-500 cursor-pointer shadow-md"
          onClick={() => dispatch(addToCurrentOrders({ ...dish, qty: 1 }))}
        >
          <p className="flex items-center justify-center w-6 h-6 rounded-full shadow-inner text-[#3CBCB4]">
            +
          </p>
          ADD
        </button>
      )}
    </motion.section>
  );
};

export { CurrentOrder };
