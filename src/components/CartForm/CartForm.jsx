import React from 'react';
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
  TextArea,
} from './CartForm.styled';

const CartForm = ({ formData, handleInputChange }) => {
  return (
    <FormContainer>
      <form>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone:</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address:</Label>
          <TextArea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
      </form>
    </FormContainer>
  );
};

export default CartForm;
