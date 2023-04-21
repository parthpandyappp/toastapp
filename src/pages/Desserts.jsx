import { useEffect } from "react";
import { getAllDishes } from "../features";
import { useSelector, useDispatch } from "react-redux";
import { DishCard } from "../components";

const Desserts = () => {
  const dispatch = useDispatch();
  const { dishes, dishesLoading } = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(getAllDishes());
  }, []);
  return (
    <div className="flex flex-col grow h-full w-full mt-28">
      <div className="flex flex-wrap w-full border p-1">
        {dishes
          .filter((dish) => dish.type === "dessert")
          .map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
      </div>
    </div>
  );
};

export { Desserts };
