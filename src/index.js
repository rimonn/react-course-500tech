import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Groceries } from './components/Groceries';

const list = [
  'milk',
  'soy',
  'apple'
];

ReactDOM.render(
  React.createElement(Groceries, { list }, []),
  document.getElementById('root')
);
registerServiceWorker();
