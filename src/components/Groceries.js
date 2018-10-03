import React from 'react';
import { Title } from './Title';
import { GroceryListItem } from './GroceryItem';

const onClickHandler = (itemName) => {
  console.log(itemName);
};

export const Groceries = props => (
  <div>
    <Title label="My List" />
    <ul>
      {props.list.map(singleItem =>
        (<GroceryListItem key={singleItem} itemName={singleItem} onClickHandler={onClickHandler} /> )
      )}
    </ul>
  </div>
);