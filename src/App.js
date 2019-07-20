import React from 'react';
import './sass/main.scss';
import { seed } from './seed';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput';
import ReelsContainer from './components/ReelsContainer';

export default class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Header />
          <SearchInput />
          <ReelsContainer />
          <Footer />
        </div>
    );
  }
}

