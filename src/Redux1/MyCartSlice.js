// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load cart state from localStorage
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
          // Same category, increase quantity
          state[existingItemIndex].qty += 1;
        } else {
          // Different category, replace the old item with the new one
          state.splice(existingItemIndex, 1, {
            id: _id,
            category,
            service,
            planName: pName,
            planPrice: pPrice,
            offerprice: pofferprice,
            pservices,
            qty: 1,
          });
        }
      } else {
        // Item doesn't exist, add a new one
        state.push({
          id: _id,
          category,
          service,
          planName: pName,
          planPrice: pPrice,
          offerprice: pofferprice,
          pservices,
          qty: 1,
        });
      }
    },

    addToCart1(state, action) {
      const { _id, category, pName, pPrice, pofferprice, service, pservices } =
        action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === _id);
      const existingItem = state[existingItemIndex];

      if (existingItem) {
        if (existingItem.category === category) {
          // Same category, increase quantity
          state[existingItemIndex].qty += 1;
        } else {
          // Different category, replace the old item with the new one
          state.splice(existingItemIndex, 1, {
            id: _id,
            category,
            service,
            planName: pName,
            planPrice: pPrice,
            offerprice: pofferprice,
            pservices,
            qty: 1,
          });
        }
      } else {
        // Item doesn't exist, add a new one
        state.push({
          id: _id,
          category,
          service,
          planName: pName,
          planPrice: pPrice,
          offerprice: pofferprice,
          pservices,
          qty: 1,
        });
      }
    },

    removeMyCartItem(state, action) {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const item = state[existingItemIndex];
        if (item.qty > 1) {
          item.qty -= 1; // Decrease quantity
        } else {
          state.splice(existingItemIndex, 1); // Remove item if qty is 0
        }
      }
    },

    deleteMyCartItem(state, action) {
      // Remove item from cart by id
      return state.filter((item) => item.id !== action.payload);
    },

    clearCart() {
      // Clear the cart
      return [];
    },
  },
});

// Export actions
export const {
  addToCart,
  addToCart1,
  removeMyCartItem,
  deleteMyCartItem,
  clearCart,
} = MyCartSlice.actions;

// Export the reducer
export default MyCartSlice.reducer;
