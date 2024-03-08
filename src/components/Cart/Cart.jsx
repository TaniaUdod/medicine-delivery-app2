import React from "react";
import { useCart } from "../hooks/useCart";
import { Card, Input, Price, Title, Button } from "./Cart.styled";

const Cart = ({ handleQuantityChange }) => {
  const { cart, changeQuantity, removeFromCart } = useCart();

  const handleInputChange = (event, itemId) => {
    let newQuantity = parseFloat(event.target.value);
    newQuantity = Math.round(newQuantity * 10) / 10;
    newQuantity = Number(newQuantity.toFixed(2));
    changeQuantity(itemId, newQuantity);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    const updatedCart = cart.cartItems.filter(
      (item) => item.medicine._id !== itemId
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ height: "75vh", overflowY: "scroll" }}>
      <ul>
        {cart.cartItems.map((item, index) => (
          <Card key={index}>
            <Title>{item.medicine.title}</Title>
            <Price>Price: ${item.price}</Price>
            <Input
              type="number"
              value={item.quantity}
              onChange={(event) => handleInputChange(event, item.medicine._id)}
              min="1"
            />
            <Button onClick={() => handleRemoveFromCart(item.medicine._id)}>
              Remove
            </Button>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
