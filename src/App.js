import React from 'react';
import './App.css';
import Container from './containers/container';

const data = [
  {
    title: 'note 1',
    content: 'content heie',
    id: 1,
  },
  {
    title: 'note 3',
    content: 'content heie',
    id: 2,
  },
  {
    title: 'note 4',
    content: 'content heie',
    id: 3,
  },
];

const App = () => (
  <div className="container">
    <Container data={data} />
  </div>
);

export default App;
