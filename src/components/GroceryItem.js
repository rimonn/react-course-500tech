import React from 'react';

export const GroceryItem = ({itemName, onClickHandler}) => (
  <div onClick={() => onClickHandler(itemName)}>{itemName}</div>
);