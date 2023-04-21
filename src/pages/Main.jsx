import { useEffect, useState } from "react";
import { getAllDishes } from "../features";
import { useSelector, useDispatch } from "react-redux";
import { acaibowls } from "../data";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MainDishCard } from "../components";

const Main = () => {
  const dispatch = useDispatch();
  const { dishesLoading } = useSelector((state) => state.dishes);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);

  return (
    <div className="flex flex-col grow h-full w-full p-2 gap-2 pb-12 mt-28">
      <section
        className={`group flex gap-2 items-center p-2 my-2 cursor-pointer active:text-[#3CBCB4]`}
        onClick={() => setToggle(!toggle)}
      >
        <p className="w-24 font-bold group-active:text-[#3CBCB4] text-sm text-gray-600">
          Acai Bowls
        </p>
        <span className="border-b-2 w-full"></span>
        {toggle ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </section>
      {toggle &&
        acaibowls
          .filter((dish) => dish.type === "main")
          .map((dish) => {
            return <MainDishCard key={dish.id} dish={dish} />;
          })}
    </div>
  );
};

export { Main };
