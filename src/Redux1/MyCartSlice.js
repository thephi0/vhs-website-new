// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load state", e);
    return [];
  }
};

const MyCartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addToCart(state, action) {
      const { _id, category, pName, pPrice, pofferprice, service, pservices } =
        action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === _id);
      const existingItem = state[existingItemIndex];

      if (existingItem) {
        if (existingItem.category === category) {
          return state.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                qty: item.qty + 1,
              };
            } else {
              return item;
            }
          });
        } else {
          return [
            ...state.slice(0, existingItemIndex),
            ...state.slice(existingItemIndex + 1),
            {
              id: _id,
              category: category,
              service: service,
              planName: pName,
              planPrice: pPrice,
              offerprice: pofferprice,
              pservices: pservices,
              qty: 1,
            },
          ];
        }
      } else {
        return [
          ...state,
          {
            id: _id,
            category: category,
            service: service,
            planName: pName,
            planPrice: pPrice,
            offerprice: pofferprice,
            pservices: pservices,
            qty: 1,
          },
        ];
      }
    },
    addToCart1(state, action) {
      const { _id, category, pName, pPrice, pofferprice, service, pservices } =
        action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state[existingItemIndex];

      if (existingItem) {
        if (existingItem.category === category) {
          return state.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                qty: item.qty + 1,
              };
            } else {
              return item;
            }
          });
        } else {
          return [
            ...state.slice(0, existingItemIndex),
            {
              id: _id,
              category: category,
              service: service,
              planName: pName,
              planPrice: pPrice,
              offerprice: pofferprice,
              pservices: pservices,
              qty: 1,
            },
            ...state.slice(existingItemIndex + 1),
          ];
        }
      } else {
        return [
          ...state,
          {
            id: _id,
            category: category,
            service: service,
            planName: pName,
            planPrice: pPrice,
            offerprice: pofferprice,
            pservices: pservices,
            qty: 1,
          },
        ];
      }
    },
    removeMyCartItem(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].qty = state[myindex].qty - 1;
      }
    },
    deleteMyCartItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart(state, action) {
      return [];
    },
  },
});

export const {
  addToCart,
  deleteMyCartItem,
  removeMyCartItem,
  clearCart,
  addToCart1,
} = MyCartSlice.actions;
export default MyCartSlice.reducer;
