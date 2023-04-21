import { useEffect, useState } from "react";
import { DishCard } from "../components";
import banner from "../assets/banner.png";
import { getAllDishes } from "../features";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

const Special = () => {
  const dispatch = useDispatch();
  const { dishes, dishesLoading } = useSelector((state) => state.dishes);
  const [isActive, setIsActive] = useState(false);
  const { currentOrders } = useSelector((state) => state.orders);

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  console.log("currentOrders: ", currentOrders);

  return (
    <div className="flex flex-col grow h-full w-full p-2 pb-12  mt-28">
      <div className="relative w-full shadow-md">
        <img
          src={banner}
          alt=""
          className="object-cover h-32 w-full rounded shadow z-0"
        />
        <p className="absolute bottom-2 p-2 text-xl text-white font-bold w-36">
          Welcome to Sacred Earth
        </p>
      </div>
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
    </div>
  );
};

export { Special };
