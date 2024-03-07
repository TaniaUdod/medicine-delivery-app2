import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-weight: bold;
  margin: 0;
  text-align: left;
`;

export const Text = styled.p`
  margin: 10px 0 0 0;
`;

export const Price = styled.p`
  margin: 0;
  text-align: right;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 10px 30px;
  margin-top: 5px;
  background-color: #59ad59;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #5ac45a;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
