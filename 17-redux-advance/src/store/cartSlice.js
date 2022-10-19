import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: [],
  cartNum: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state, action) {
      const findCart = state.cart.findIndex(
        (el) => el.id === action.payload.id
      );

      if (state.cart.length > 0 && findCart !== -1) {
        return {
          ...state,
          cart: state.cart.map((el, idx) => {
            if (idx === findCart) {
              return { ...el, amount: el.amount + 1 };
            }
            return el;
          }),
        };
      }

      return {
        cartNum: state.cartNum + 1,
        cart: state.cart.concat(action.payload),
      };
    },
    increaseAmount(state, action) {
      const findCart = state.cart.findIndex(
        (el) => el.id === action.payload.id
      );

      const cart = { ...state.cart[findCart] };

      cart.amount += 1;

      return {
        ...state,
        cart: state.cart.map((el, idx) => {
          if (findCart === idx) {
            return cart;
          }
          return el;
        }),
      };
    },
    decreaseAmount(state, action) {
      const findCart = state.cart.findIndex(
        (el) => el.id === action.payload.id
      );

      const cart = { ...state.cart[findCart] };

      if (cart.amount === 1) {
        return {
          ...state,
          cart: state.cart.filter((el) => el.id !== action.payload.id),
          cartNum: state.cartNum - 1,
        };
      }

      cart.amount -= 1;

      return {
        ...state,
        cart: state.cart.map((el, idx) => {
          if (findCart === idx) {
            return cart;
          }
          return el;
        }),
      };
    },
    toggleShowCart(state) {
      return { ...state, showCart: !state.showCart };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
