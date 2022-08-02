import React, { createContext, useEffect, useReducer } from "react";
import cartReducer from "./AppReducer";
// import axios from "axios";
import { data } from "./data";

const AppContext = createContext();

const initialState = {
  cart: data,
  amount: 0,
  total: 0,
  loading: false,
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const clearAll = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const totalQuantity = () => {
    dispatch({ type: "GET_QUANTITY" });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await axios.get(
  //       "https://62e25b133891dd9ba8e5d350.mockapi.io/api/tours-destinations/mobiles"
  //     );

  //     if (res.data) {
  //       state.loading = true;
  //       dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
  //     }
  //   };

  //   fetchProducts();
  // }, [state.cart, state]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        removeItem,
        totalQuantity,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { ContextProvider, AppContext };
