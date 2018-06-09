import React, { Component } from 'react';
import './App.css';
import Container from './containers/container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Container data={data}/>
      </div>
    );
  }
}

export default App;

const data = [
  {
    title: "note 1",
    content: "content heie",
    id: 1,
  },
  {
    title: "note 3",
    content: "content heie",
    id: 2,
  },
  {
    title: "note 4",
    content: "content heie",
    id: 3,
  },
]