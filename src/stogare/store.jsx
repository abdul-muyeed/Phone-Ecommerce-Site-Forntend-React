import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/CartSlice";
import productReducer from "../components/ProductSlice";

const store = configureStore({
    reducer: {
        cartReducer,
        productReducer,

    }
        
        
    
})

export default store;