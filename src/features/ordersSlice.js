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
            state.previousOrders = [...state.previousOrders, state.currentOrders]
            state.currentOrders = []
        },
        incrementOrderQty: (state, action) => {
            console.log(action.payload.id)
            state.currentOrders = state.currentOrders.map((order) => {
                if (order.id === action.payload.id) {
                    return { ...order, qty: order.qty + 1 }
                }
                return order
            })
        },
        decrementOrderQty: (state, action) => {
            console.log(action.payload.id)
            state.currentOrders = state.currentOrders.map((order) => {
                if (order.id === action.payload.id) {
                    if (order.qty - 1 === 0) {
                        state.currentOrders = state.currentOrders.filter((d) => d.id !== action.payload.id)
                    }
                    else {
                        return { ...order, qty: order.qty - 1 }
                    }
                }
                return order
            })
        }
    }
})

export const { addToCurrentOrders, moveToPreviosOrders, incrementOrderQty, decrementOrderQty } = ordersSlice.actions
const ordersReducer = ordersSlice.reducer;
export { ordersReducer };