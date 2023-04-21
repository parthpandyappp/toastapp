import { useEffect } from "react";
import { getAllDishes } from "../features";
import { useSelector, useDispatch } from "react-redux";
import { DishCard } from "../components";

const Beverages = () => {
  const dispatch = useDispatch();
  const { dishes, dishesLoading } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);
  return (
    <div className="flex flex-col grow h-full w-full mt-28">
      <div className="flex flex-wrap w-full  p-1">
        {dishes
          .filter((dish) => dish.type === "beverage")
          .map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
      </div>
    </div>
  );
};

export { Beverages };
