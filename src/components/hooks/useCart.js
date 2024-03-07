import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = sum(cartItems.map(item => item.price));
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const sum = items => {
    return items.reduce(
      (prevValue, curValue) => prevValue + parseFloat(curValue),
      0
    );
  };

  const changeQuantity = (medicineId, newQuantity) => {
    const cartItem = cartItems.find(item => item.medicine._id === medicineId);

    if (!cartItem) return;

    const { price } = cartItem.medicine;

    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: price * newQuantity,
    };

    setCartItems(
      cartItems.map(item =>
        item.medicine._id === medicineId ? changedCartItem : item
      )
    );
  };

  const addToCart = medicine => {
    setCartItems(prevCartItems => [
      ...prevCartItems,
      { medicine, quantity: 1, price: medicine.price },
    ]);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart: { cartItems, totalPrice },
        addToCart,
        changeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
