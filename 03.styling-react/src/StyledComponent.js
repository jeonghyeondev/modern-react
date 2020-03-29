import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: boder-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    backgroun: rgba(255, 255, 255, 0.9);
  }
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid #fff;
      color: #fff;
      &:hover {
        background: #fff;
        color: #000;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  <div>
    <Button>안녕하세요</Button>
  </div>;
};

export default StyledComponent;
