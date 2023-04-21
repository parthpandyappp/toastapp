import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { incrementOrderQty, decrementOrderQty } from "../features";
import { FinalOrder } from "../components";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const { currentOrders, previousOrders } = useSelector(
    (state) => state.orders
  );

  return (
    <div className="flex flex-col grow h-full w-full">
      <section className="flex justify-between border px-2 py-4 rounded-md">
        <article className="flex gap-2 items-center">
          <Link to="/" className="p-1 border rounded-md drop-shadow-xl">
            <BsArrowLeft className="text-2xl lg" />
          </Link>
          <p className="font-semibold text-lg">Place Order</p>
        </article>
      </section>
      <section className="flex gap-2 items-center p-2">
        <span className="relative">
          <p className="w-32 font-bold text-gray-600">Current Order</p>
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-0 dark:border-gray-900">
            {currentOrders.length}
          </div>
        </span>
        <span className="border-b-2 w-full"></span>
        <AiFillCaretDown />
      </section>
      <section className="mt-2 flex flex-col gap-4 border rounded-md shadow-inner p-1">
        {currentOrders.map((dish) => {
          return <FinalOrder dish={dish} />;
        })}
      </section>
      <section className="flex gap-2 items-center p-2 mt-2">
        <span className="relative">
          <p className="w-36 font-bold text-gray-600">Previous Orders</p>
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-0 dark:border-gray-900">
            20
          </div>
        </span>
        <span className="border-b-2 w-full"></span>
        <AiFillCaretDown />
      </section>
      <section className="mt-2 flex flex-col gap-4 shadow-inner">
        {previousOrders.map((dish) => {
          return (
            <div key={dish.id} className="flex justify-between items-center">
              <article className="flex items-center gap-2">
                <p className="h-6 w-6 bg-black rounded-full"></p>
                <span className="">
                  <p>{dish.item}</p>
                  <p className="text-sm text-gray-500">₹{dish.price}</p>
                </span>
              </article>
              <span className="flex gap-2 items-center">
                <p className="rounded-full border-2 h-6 w-6 text-center">-</p>
                <p className="">{dish.qty}</p>
                <p className="rounded-full border-2 h-6 w-6 text-center">+</p>
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export { PlaceOrder };
