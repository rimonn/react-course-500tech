import React from 'react';
import styled, {css} from 'styled-components';

const GroceryItem = ({itemName, onClickHandler}) => (
  <Container isDisabled={true}>
    <div onClick={() => onClickHandler(itemName)}>{itemName}</div>
  </Container>
);

export const GroceryListItem = props => (
  props.itemName && <li><GroceryItem {...props} /></li>
);

// use css from styled-components
const Container = styled.div`
  background-color: cornflowerblue;
  ${({isDisabled}) => isDisabled && css`
    background-color: red;
  `}
`;

// extend the Container styled component
const BigContainer = Container.extend`
`;