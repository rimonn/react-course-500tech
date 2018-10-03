import { Groceries } from './Groceries';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'blue'
};

const list = [
  'milk',
  'soy',
  '',
  'apple',
  null
];

export const App = () => (
  <ThemeProvider theme={theme}>
    <Groceries list={list}/>
  </ThemeProvider>
);
