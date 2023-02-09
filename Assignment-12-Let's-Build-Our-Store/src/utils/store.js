import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({ //this store is object having slices
    reducer:{
        cart:cartSlice,
    }
});
export default store;