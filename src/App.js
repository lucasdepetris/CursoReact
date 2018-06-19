import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenido a este curso</h1>
        </header>
        <h3>Vamos a aprender React</h3>
        <p>Hola Mundo estoy aprendiendo react</p>
        <strong>Esto es una etiqueta STRONG HTML</strong>
      </div>
    );
  }
}

export default App;
