import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Title = () => (<h3>Hello</h3>);
const groceries = [
  'milk',
  'soy',
  'apple'
];

ReactDOM.render(
  React.createElement('div', null, [
    React.createElement(Title, null, 'my list'),
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
