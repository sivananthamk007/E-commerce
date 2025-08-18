import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart(state, action) {
            const exist_item = state.list.find(item => item.id === action.payload.id)
            if (exist_item) {
                exist_item.quantity += 1
            }
            else {
                state.list.push({ ...action.payload, quantity: 1 })

            }
        },
        incrementItem(state, action) {
            const item = state.list.find(i => i.id === action.payload.id)
            if (item) {
                item.quantity += 1
            }
        },
        decrementItem(state, action) {
            const item = state.list.find(i => i.id === action.payload.id)
            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },
        removeitem(state, { payload }) {
            state.list = state.list.filter(item => item.id !== payload.id);

        },
        modifyItem(state, { payload }) {
            const index = state.list.findIndex(
                (item) = item.id === payload.id
            );

            state.list = [
                ...state.list.slice(0, index),
                { ...state.list[index], quantity: payload.quantity },
                ...state.list.slice(index + 1),
            ];
        }

    },

});

export const { addtoCart, removeitem, incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;


