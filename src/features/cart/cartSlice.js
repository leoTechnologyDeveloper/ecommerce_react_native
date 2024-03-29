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
      const index = state.items.findIndex(
        (item) => item.id === actions.payload.id
      );

      if (index > -1) {
        state.items = state.items.map((item) => {
          if (item.id === actions.payload.id) {
            return { ...item, cantidad: item.cantidad + 1 };
          }
          return item;
        });
      } else {
        state.items = [...state.items, { ...actions.payload, cantidad: 1 }];
      }

      state.total = state.items.reduce(
        (acc, item) => (acc = acc + item.price * item.cantidad),
        0
      );
      console.log(state.items.length);
    },
    deleteItem: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
      state.total = state.items.reduce(
        (acc, item) => (acc = acc + item.price * item.cantidad),
        0
      );
      console.log(state.items.length);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addcartItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
