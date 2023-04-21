import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { moveToPreviosOrders } from "../features";
import { CurrentOrder, PreviousOrder } from "../components";
import { useState } from "react";
import { motion } from "framer-motion";
const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currToggle, setCurrToggle] = useState(true);
  const [prevToggle, setPrevToggle] = useState(true);

  const { currentOrders, previousOrders } = useSelector(
    (state) => state.orders
  );

  const noOfItems = currentOrders.reduce((prev, curr) => {
    return prev + curr.qty;
  }, 0);

  console.log("PREV: ", previousOrders);
  return (
    <div className="flex flex-col grow h-full w-full">
      <section className="flex justify-between border bg-[#f1f1f1] px-2 py-4 rounded-md z-10 fixed w-full md:w-3/5">
        <article className="flex gap-2 items-center">
          <Link
            to="/"
            className="p-1 border rounded-md drop-shadow-xl active:shadow-inner"
          >
            <BsArrowLeft className="text-2xl lg" />
          </Link>
          <p className="font-semibold text-lg">Place Order</p>
        </article>
      </section>
      <section
        className={`group flex gap-2 items-center p-2 my-2 cursor-pointer active:text-[#3CBCB4] mt-24`}
        onClick={() => setCurrToggle(!currToggle)}
      >
        <span className="relative">
          <p className="w-32 font-bold group-active:text-[#3CBCB4] text-gray-600">
            Current Order
          </p>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-0 dark:border-gray-900">
            {currentOrders.length}
          </div>
        </span>
        <span className="border-b-2 w-full"></span>
        {currToggle ? (
          <AiFillCaretUp className="cursor-pointer" />
        ) : (
          <AiFillCaretDown className="cursor-pointer" />
        )}
      </section>
      {currentOrders.length > 0 && currToggle && (
        <section className="mt-2 flex flex-col gap-4 border rounded-md shadow-inner p-1">
          {currentOrders.map((dish) => {
            return <CurrentOrder dish={dish} />;
          })}
          <p className="text-sm underline text-[#3CBCB4]">
            Add cooking instruction
          </p>
        </section>
      )}
      <section
        className={`group flex gap-2 items-center p-2 my-2 cursor-pointer active:text-[#3CBCB4]`}
        onClick={() => setPrevToggle(!prevToggle)}
      >
        <span className="relative">
          <p className="w-36 font-bold group-active:text-[#3CBCB4] text-gray-600">
            Previous Orders
          </p>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-0 dark:border-gray-900">
            {previousOrders.length}
          </div>
        </span>
        <span className="border-b-2 w-full"></span>
        {prevToggle ? (
          <AiFillCaretUp
            className="cursor-pointer"
            onClick={() => setPrevToggle(!prevToggle)}
          />
        ) : (
          <AiFillCaretDown
            className="cursor-pointer"
            onClick={() => setPrevToggle(!prevToggle)}
          />
        )}
      </section>
      {previousOrders.length > 0 && prevToggle && (
        <section className="mt-2 flex flex-col gap-4 shadow-inner">
          {previousOrders.map((dish) => {
            return <PreviousOrder dish={dish} />;
          })}
        </section>
      )}
      <footer className="fixed bottom-0 w-full md:w-3/5 rounded-md bg-[#459EAF] flex-none p-3">
        <article className="flex justify-between items-center">
          <p className="font-bold text-white text-sm">{noOfItems} items</p>
          <motion.span
            className="flex items-center gap-2 p-1 px-2 mr-2 rounded cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              dispatch(moveToPreviosOrders());
              navigate("/");
            }}
          >
            <p className="font-bold text-white text-sm">PLACE ORDER</p>
            <span className="cursor-pointer rounded-full shadow-inner p-1">
              <BsArrowRight className="text-white font-semibold text-xl" />
            </span>
          </motion.span>
        </article>
      </footer>
    </div>
  );
};

export { PlaceOrder };
