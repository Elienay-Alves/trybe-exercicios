import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}