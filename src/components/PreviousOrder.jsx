const PreviousOrder = ({ dish }) => {
  return (
    <section class="flex items-center justify-between p-2 rounded">
      <span class="flex gap-2 items-center">
        <p
          class={`border-2 w-6 h-6 flex items-center justify-center rounded ${
            dish.isVeg
              ? "border-green-600 text-green-600"
              : "border-red-600 text-red-600"
          } font-bold text-3xl`}
        >
          •
        </p>
        <span>
          <p class="text-gray-500 font-bold">{dish.item}</p>
          <p class="text-sm font-bold text-gray-500">₹{dish.price}</p>
        </span>
      </span>

      <p className="text-sm text-center text-gray-500 font-semibold p-3">
        {dish.qty}
      </p>
    </section>
  );
};

export { PreviousOrder };
