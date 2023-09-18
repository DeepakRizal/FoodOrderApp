import React from "react";

const cartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export default cartContext;
