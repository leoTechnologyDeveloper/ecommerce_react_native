import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcartItem: (state, actions) => {
      state.items = [...state.items, actions.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addcartItem } = cartSlice.actions;
export default cartSlice.reducer;
