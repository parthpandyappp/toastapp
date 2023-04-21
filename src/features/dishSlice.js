import { dishes } from "../data";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
    dishesLoading: false,
}

export const getAllDishes = createAsyncThunk("dishes/getAllDishes", async () => {
    try {
        const res = await (new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dishes);
            }, 2000)
        }))
        return res;
    } catch (error) {
        console.error(error)
    }
})

const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllDishes.pending]: (state) => {
            state.dishesLoading = true
        },
        [getAllDishes.fulfilled]: (state, action) => {
            state.dishesLoading = false
            state.dishes = action.payload
            console.log("ACTION DISH: ", action)
        },
    }
})

const dishesReducer = dishesSlice.reducer;
export { dishesReducer };