import { useEffect, useState } from "react";
import { DishCard } from "../components";
import banner from "../assets/banner.png";
import { getAllDishes } from "../features";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

const Special = () => {
  const dispatch = useDispatch();
  const { dishes, dishesLoading } = useSelector((state) => state.dishes);
  const { currentOrders } = useSelector((state) => state.orders);

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  console.log("currentOrders: ", currentOrders);

  return (
    <div className="flex flex-col grow h-full w-full p-2 pb-12">
      <div className="relative w-full shadow-md">
        <img
          src={banner}
          alt=""
          className="object-cover h-32 w-full rounded shadow"
        />
        <p className="absolute bottom-2 p-2 text-xl text-white font-bold w-36">
          Welcome to Sacred Earth
        </p>
      </div>
      <section className="flex gap-2 items-center p-2 my-2">
        <p className="w-48 font-bold text-gray-600">Today's special</p>
        <span className="border-b-2 w-full"></span>
        {toggle ? (
          <AiFillCaretUp onClick={() => setToggle(!toggle)} />
        ) : (
          <AiFillCaretDown onClick={() => setToggle(!toggle)} />
        )}
      </section>
      {toggle && (
        <div className="flex flex-wrap w-full h-full items-stretch">
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
