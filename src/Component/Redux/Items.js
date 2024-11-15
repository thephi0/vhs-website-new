import { createSlice } from "@reduxjs/toolkit";

const loadState1 = () => {
  try {
    const serializedState = localStorage.getItem("Items");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load state", e);
    return [];
  }
};

const PMItems = createSlice({
  name: "Items",
  initialState: loadState1(),

  reducers: {
    addToPMCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      console.log(existingProduct, "existingProduct");

      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        state.push({
          id: action.payload.id,
          category: action.payload.category,
          subcategory: action.payload.subcategory,
          itemname: action.payload.itemname,
          volume: action.payload.volume,
          weight: action.payload.weight,
          offerPrice: action.payload.offerPrice,
          packingPrice: action.payload.packingPrice,
          qty: 1,
        });
      }
    },

    removePMCartItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.qty += 1;
        // product.totalPrice = product.productPrice * product.qty;
        // product.totalPrice = product.productPrice * product.quantity;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        if (product.qty === 1) {
          // Remove product if quantity becomes 1 and the button is clicked
          return state.filter((item) => item.id !== action.payload.id);
        } else {
          product.qty -= 1;
        }
      }
    },

    clearCart: (state) => {
      return [];
    },
  },
});

export const {
  addToPMCart,
  removePMCartItems,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = PMItems.actions;
export default PMItems.reducer;

// Clear the persisted state
// persistor.purge();
