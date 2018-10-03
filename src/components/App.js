import { Groceries } from './Groceries';
import React from 'react';

const list = [
  'milk',
  'soy',
  '',
  'apple',
  null
];

export const App = () => {
  return (<Groceries list={list}/>)
};
