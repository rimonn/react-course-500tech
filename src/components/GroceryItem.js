import React from 'react';
import styled from 'styled-components';

const GroceryItem = ({itemName, onClickHandler}) => (
  <Container>
    <div onClick={() => onClickHandler(itemName)}>{itemName}</div>
  </Container>
);

export const GroceryListItem = props => (
  props.itemName && <li><GroceryItem {...props} /></li>
);

const Container = styled.div`
  background-color: cornflowerblue;
`;
