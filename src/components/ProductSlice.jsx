import { createSlice } from "@reduxjs/toolkit"

const getProductData = async () => {
    const res = await fetch("/api/products", {
        method: "GET",
        // credentials: "include",
        headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
}

const initialState = {
    products: await getProductData(),
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})


export default productSlice.reducer