import React, { useState } from 'react';
import { orderService } from '../../services/ordersService';
import { useCart } from '../../components/hooks/useCart';
import Cart from '../../components/Cart/Cart';
import CartForm from '../../components/CartForm/CartForm';
import Loader from '../../components/Loader/Loader';
import { Button } from '../../components/MedicineList/MedicineList.styled';

const ShoppingCart = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const orderData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        items: cart.cartItems,
        totalPrice: cart.totalPrice,
      };

      await orderService.submitOrder(orderData);

      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
      });

      clearCart();
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isLoading && <Loader />}

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <CartForm formData={formData} handleInputChange={handleInputChange} />
        </div>
        <div style={{ flex: '1', marginLeft: '20px' }}>
          {cart.cartItems.length ? (
            <Cart cartItems={cart.items} />
          ) : (
            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
              The basket is empty. There are no products added to the cart.
            </p>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <div>
          <p>
            <span
              style={{
                fontWeight: 'bold',
              }}
            >
              Total Price:
            </span>{' '}
            ${cart.totalPrice}
          </p>
        </div>
        <div>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
