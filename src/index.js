import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const list = [
  'milk',
  'soy',
  'apple'
];

const Title = ({label}) => (
  <h3>{`${label} of groceries`}</h3>
);

const Groceries = props => (
  <div>
    <Title label="My List" />
    <ul>
      {props.list.map(singleItem => (<li key={singleItem}>{singleItem}</li>))}
    </ul>
  </div>
);

ReactDOM.render(
  React.createElement(Groceries, { list }, []),
  document.getElementById('root')
);
registerServiceWorker();
