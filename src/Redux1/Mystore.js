// Redux1/Mystore.js
import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../Redux1/MyProductSlice";
import MyCartReducer from "../Redux1/MyCartSlice";
import MyCartReducer1 from "../Redux/MyCartSlice";
import PMItems from "../../src/Component/Redux/Items";
import MyCartSlice1 from "../../src/Component/Redux/PMaddons";

// Load state from local storage for cart
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

// Load state from local storage for Items
const loadState1 = () => {
  try {
    const serializedState = localStorage.getItem("Items");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

// Load state from local storage for Addons
const loadState2 = () => {
  try {
    const serializedState = localStorage.getItem("addons");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.warn("Could not load state", e);
    return undefined;
  }
};

// Save cart state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

// Save Items state to local storage
const saveState1 = (state) => {
  try {
    const serializedState = JSON.stringify(state.Items);
    localStorage.setItem("Items", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

// Save addons state to local storage (FIXED)
const saveState2 = (state) => {
  try {
    const serializedState = JSON.stringify(state.addons); // Fixed to state.addons
    localStorage.setItem("addons", serializedState);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

// Combine preloaded state for cart and Items
const preloadedState = {
  cart: loadState(),
  Items: loadState1(),
  addons: loadState2(),
};

const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
    addon: MyCartReducer1,
    Items: PMItems,
    addons: MyCartSlice1,
  },
  preloadedState, // Use the combined preloaded state
});

// Subscribe to store updates and save both cart and Items to localStorage
mystore.subscribe(() => {
  saveState(mystore.getState()); // Save cart state
  saveState1(mystore.getState()); // Save Items state
  saveState2(mystore.getState()); // Save Items state
});

export default mystore;
