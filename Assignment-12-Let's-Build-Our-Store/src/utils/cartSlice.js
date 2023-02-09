import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      //mapping between action from component(left side) and reducer function(right side)which takes 2 paraters state and action
    },

    clearCart: (state) => {
      state.items = [];
    },

    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
