import React from 'react';
import { useCart } from '../hooks/useCart';
import { Card, Input, Price, Title } from './Cart.styled';

const Cart = ({ handleQuantityChange }) => {
  const { cart, changeQuantity } = useCart();

  const handleInputChange = (event, itemId) => {
    const newQuantity = parseInt(event.target.value);
    changeQuantity(itemId, newQuantity);
  };

  return (
    <div style={{ height: '75vh', overflowY: 'scroll' }}>
      <ul>
        {cart.cartItems.map((item, index) => (
          <Card key={index}>
            <Title>{item.medicine.title}</Title>
            <Price>Price: ${item.price}</Price>
            <Input
              type="number"
              value={item.quantity}
              onChange={event => handleInputChange(event, item.medicine._id)}
              min="1"
            />
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
