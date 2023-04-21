import { useEffect, useState } from "react";
import { DishCard } from "../components";
import banner from "../assets/banner.png";
import { getAllDishes } from "../features";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

const Special = () => {
  const dispatch = useDispatch();
  const { dishes, dishesLoading } = useSelector((state) => state.dishes);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  return (
    <div className="flex flex-col grow h-full w-full p-2 pb-12  mt-28">
      {dishesLoading ? (
        <span className="h-1/2 flex gap-2 text-gray-500 font-bold justify-center items-center mt-0">
          Loading
          <FiLoader className="text-3xl" />
        </span>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            className="relative w-full shadow-md"
          >
            <img
              src={banner}
              alt={banner}
              className="object-cover h-32 w-full rounded shadow z-0"
            />
            <p className="absolute bottom-2 p-2 text-xl text-white font-bold w-36">
              Welcome to Sacred Earth
            </p>
          </motion.div>
          <section
            className={`group flex gap-2 items-center p-2 my-2 cursor-pointer active:text-[#3CBCB4]`}
            onClick={() => setToggle(!toggle)}
          >
            <p className="w-36 font-semibold group-active:text-[#3CBCB4] text-gray-500 text-sm">
              Today's special
            </p>
            <span className="border-b-2 w-full"></span>
            {toggle ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </section>
          {toggle && (
            <div className="flex flex-wrap w-full h-full items-stretch ">
              {dishes
                .filter((dish) => dish.type === "special")
                .map((dish) => {
                  return <DishCard dish={dish} />;
                })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { Special };
