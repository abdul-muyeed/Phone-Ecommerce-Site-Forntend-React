import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    totalPrice: localStorage.getItem('totalPrice') ? JSON.parse(localStorage.getItem('totalPrice')) : 0,
    totalItems: localStorage.getItem('totalItems') ? JSON.parse(localStorage.getItem('totalItems')) : 0,
    shippingCost:  localStorage.getItem('shippingCost') ? JSON.parse(localStorage.getItem('shippingCost')) : 0,

}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            let cart = action.payload
            let a = true
            state.cart.map((item) => {
                if(item.id === cart.id && item.color === cart.color && item.ram === cart.ram && item.rom === cart.rom){
                    item.quantity += 1
                    
                    a=false
                }
            })
            if(a){
                state.cart.push(cart)
            }

                localStorage.setItem('cart', JSON.stringify(state.cart))
           
                        
            
        },
        removefromCart: (state, action) => {
            let cart = action.payload
            state.cart = state.cart.filter(item => item.id !== cart.id)
        },
        clearCart: (state) => {
            state.cart = []
        },
        totalPrice: (state) => {
            let total = 0
            
            state.cart.map(item => {
                
                total += item.price * item.quantity
            })
            state.totalPrice = total
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        },
        totalItems: (state) => {
            let total = 0
            state.cart.map(item => {
                total += item.quantity
            })
            state.totalItems = total
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
        },
        shippingCost: (state) => {
            let total = 0
            state.cart.map(item => {
                total += item.shippingCost * item.quantity
            })
            state.shippingCost = total
            localStorage.setItem('shippingCost', JSON.stringify(state.shippingCost))
        }
    }
    
})



export const { addtoCart, removefromCart, updateCart, totalPrice, totalItems, shippingCost } = cartSlice.actions
export default cartSlice.reducer