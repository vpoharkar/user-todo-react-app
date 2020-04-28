import React from 'react';
import './App.css';
import logo from './logo.svg';
import github from './github.svg';
import TodoList from './todoList/todoList';

function App() {
  return (
    <div className="App">
      <h1><img src={logo} className="App-logo" alt="logo" /></h1>
      <h1>Uset Todo Application In React.js</h1>
      <div id="container">
        <TodoList />
      </div>
      <div className="footer">
        <small><i>Todo application created in React.js </i><b>#Github</b></small>
        <a href=""><b><img src={github} className="github-logo" alt="github" /></b></a>
      </div>
    </div>
  );
}

export default App;
