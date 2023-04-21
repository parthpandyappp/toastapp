import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentOrders: [],
    currentOrdersLoading: false,
    previousOrders: [],
    previousOrdersLoading: false,
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addToCurrentOrders: (state, action) => {
            console.log(action)
            state.currentOrders = [...state.currentOrders, action.payload]
        },
        moveToPreviosOrders: (state) => {
            state.previousOrders = [...state.previousOrders, ...state.currentOrders]
            state.currentOrders = []
        },
        incrementOrderQty: (state, action) => {
            const { id } = action.payload;
            const orderIndex = state.currentOrders.findIndex(
                (order) => order.id === id
            );
            if (orderIndex !== -1) {
                state.currentOrders[orderIndex].qty += 1;
            }
        },
        decrementOrderQty: (state, action) => {
            const { id } = action.payload;
            const orderIndex = state.currentOrders.findIndex(
                (order) => order.id === id
            );
            if (orderIndex !== -1) {
                state.currentOrders[orderIndex].qty -= 1;
                if (state.currentOrders[orderIndex].qty < 1) {
                    state.currentOrders.splice(orderIndex, 1);
                }
            }
        },
    }
})

export const { addToCurrentOrders, moveToPreviosOrders, incrementOrderQty, decrementOrderQty } = ordersSlice.actions
const ordersReducer = ordersSlice.reducer;
export { ordersReducer };