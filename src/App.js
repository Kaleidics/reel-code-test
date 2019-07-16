import React from 'react';
import './sass/main.scss';
import { seed } from './seed';
import Header from './components/Header';

export default class App extends React.Component {

  render() {
    console.log(seed)
    return (
        <div className="App">
          <Header />
        </div>
    );
  }
}

