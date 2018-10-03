import React from 'react';
import { Title } from './Title';
import { GroceryItem } from './GroceryItem';

const onClickHandler = (itemName) => {
  console.log(itemName);
};

export const Groceries = props => (
  <div>
    <Title label="My List" />
    <ul>
      {props.list.map(singleItem =>
        (<li key={singleItem}>
          <GroceryItem itemName={singleItem} onClickHandler={onClickHandler} />
        </li>))}
    </ul>
  </div>
);