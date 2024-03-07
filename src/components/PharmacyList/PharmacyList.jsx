import React from 'react';
import { StyledLi, StyledLink } from './PharmacyList.styled';

const PharmacyList = ({ pharmacies }) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Shops</h3>
      <ul>
        {pharmacies.map(({ _id, name, phone }) => (
          <StyledLi key={_id}>
            <StyledLink to={`/pharmacies`}>
              <p>{name}</p>
              <p>{phone}</p>
            </StyledLink>
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};

export default PharmacyList;
