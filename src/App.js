import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales'

class App extends Component {
  render() {
    var courses = [
      {name:'coursename',price:123},
      {name:'coursename',price:123},
      {name:'coursename',price:12},
      {name:'coursename',price:1230},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Couse Purchase</h1>
        </header>
        <CourseSales items={courses}/>
      </div>
    );
  }
}

export default App;
