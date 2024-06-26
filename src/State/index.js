import {createSlice } from '@reduxjs/toolkit'


const initialState = {
    isCartOpen : false,
    cart:[],
    items:[]
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       setItems: (state,action)=>{
        state.items = action.payload
       } ,

       addTocart:(state,action)=>{
        state.items = [...state.cart, action.payload.items]
       },
       
       removeFromCart:(state,action)=>{
        state.cart = state.cart.filter((item)=>item.id !== action.payload.id)
       },

       increaseCount :(state,action)=>{
        state.cart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                item.count++
            }
            return item
        })
       },

       decreaseCount :(state,action)=>{
        state.cart = state.cart.map((item)=>{
            if(item.id === action.payload.id && item.count > 1){
                item.count--
            }
            return item
        })
       },

       setIsCartOpen:(state)=>{
        state.isCartOpen = !state.isCartOpen
       }


    }
});


export const {
    setItems,
    addTocart,
    increaseCount,
    decreaseCount,
    removeFromCart,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer