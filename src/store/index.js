import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer, ordersReducer } from "../features"



const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        orders: ordersReducer
    }
})

export default store;