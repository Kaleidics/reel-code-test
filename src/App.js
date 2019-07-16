import React from 'react';
import './sass/main.scss';
import { seed } from './seed'

export default class App extends React.Component {

  render() {
    console.log(seed)
    return (
        <div className="App">
        </div>
    );
  }
}

