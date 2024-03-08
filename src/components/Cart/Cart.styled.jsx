import styled from "styled-components";

export const Card = styled.li`
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Price = styled.p`
  margin: 10px 0;
`;

export const Input = styled.input`
  width: 50px;
  padding: 8px 10px;

  &:hover {
    border: 2px solid #59ad59;
  }
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
