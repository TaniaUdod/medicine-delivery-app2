import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLi = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    color: #59ad59;
    transform: scale(1.1);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
