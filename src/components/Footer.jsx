import { FiShoppingBag } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const { currentOrders } = useSelector((state) => state.orders);

  return (
    <footer className="fixed bottom-0 w-full md:w-3/5 rounded bg-slate-100 flex-none text-center p-3">
      <section className="flex justify-between">
        <IoIosFlash className="text-2xl" />
        <BsBook className="text-2xl" />
        <Link to="/placeorder" className="relative">
          <FiShoppingBag className="text-2xl" />
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-3 dark:border-gray-900">
            {currentOrders.length}
          </div>
        </Link>
      </section>
    </footer>
  );
};

export { Footer };
