import React, { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { StyledLi, Title, Text, Price, Button } from "./MedicineList.styled";

const MedicineList = ({ medicines }) => {
  const { addToCart } = useCart();

  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromStorage) {
      setAddedToCart(cartFromStorage);
    }
  }, [medicines]);

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
    const updatedCart = [...addedToCart, medicine._id];
    setAddedToCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ height: "80vh", overflowY: "scroll" }}>
      <ul>
        {medicines.map((medicine) => (
          <StyledLi key={medicine._id}>
            <Title>{medicine.title}</Title>
            <Text>{medicine.description}</Text>
            <Price>${medicine.price}</Price>
            <Button
              onClick={() => handleAddToCart(medicine)}
              disabled={addedToCart.includes(medicine._id)}
            >
              {addedToCart.includes(medicine._id)
                ? "Already in cart"
                : "Add to cart"}
            </Button>
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
