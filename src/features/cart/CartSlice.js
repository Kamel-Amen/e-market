import { createSlice } from '@reduxjs/toolkit';

// const url = 'https://fakestoreapi.com/products';
const initialState = {
  // products: [],
  cartItems: [],
  total: 0,
  isLoading: true,
};

// export const getProducts = createAsyncThunk('cart/getProducts', () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [action.payload, ...state.cartItems];
    },
    removeFormCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartId !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.total = total;
    },
  },
  // extraReducers: {
  //   [getProducts.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getProducts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.products = action.payload;
  //   },
  //   [getProducts.rejected]: (state) => {
  //     state.isLoading = false;
  //   },
  // },
});

export const { addToCart, removeFormCart, clearCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
