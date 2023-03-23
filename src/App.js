import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  const helloWorld = <h1>Hello World</h1>

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(helloWorld);
}

export default App;
