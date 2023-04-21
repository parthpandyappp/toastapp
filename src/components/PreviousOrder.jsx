import { motion } from "framer-motion";

const PreviousOrder = ({ dish }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className="flex items-center justify-between p-2 rounded"
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

      <p className="text-sm text-center text-gray-500 font-semibold p-3">
        {dish.qty}
      </p>
    </motion.section>
  );
};

export { PreviousOrder };
