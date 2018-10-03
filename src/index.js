import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const groceries = [
  'milk',
  'soy',
  'apple'
];

ReactDOM.render(
  React.createElement('div', null, [
    React.createElement('h3', null, 'my list'),
    React.createElement('ul', null, [
      groceries.map(singleItem => React.createElement('li', null, singleItem))
      
      // Equivalent to:
      // React.createElement('li', null, 'soy'),
      // React.createElement('li', null, 'apple'),
      // React.createElement('li', null, 'apple'),
    ])
  ]),
  document.getElementById('root')
);
registerServiceWorker();
