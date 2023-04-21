const alreadyAdded = (dish, currentOrders) => {
    return currentOrders.some((order) => order.item === dish.item);
};

const getQty = (dish, currentOrders) => {
    return currentOrders.find((order) => order.item === dish.item)?.qty
}

export { alreadyAdded, getQty }