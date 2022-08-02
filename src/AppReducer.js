const cartReducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    return { ...state, cart: [] };
  }

  if (action.type === "FETCH_PRODUCTS") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const items = state.cart.filter((el) => el.id !== action.payload);
    return { ...state, cart: items };
  }

  if (action.type === "GET_QUANTITY") {
    const total = state.cart.reduce((t, a) => (t += a), 0);
    return { ...state, amount: total };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((el) =>
        el.id === action.payload
          ? { ...el, quantity: el.quantity + 1 }
          : { ...el }
      ),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((el) =>
          el.id === action.payload
            ? { ...el, quantity: el.quantity - 1 }
            : { ...el }
        )
        .filter((el) => el.quantity !== 0),
    };
  }

  if (action.type === "GET_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        cartTotal.amount += quantity;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    return { ...state, total, amount };
  }

  return state;
};

export default cartReducer;
