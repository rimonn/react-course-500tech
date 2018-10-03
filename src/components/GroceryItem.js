import React from 'react';

const GroceryItem = ({itemName, onClickHandler}) => (
  <div onClick={() => onClickHandler(itemName)}>{itemName}</div>
);

export const GroceryListItem = props => (
  props.itemName && <li><GroceryItem {...props} /></li>
);
