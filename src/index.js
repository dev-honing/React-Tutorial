// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/test.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React 18!</h1>
        <TestComponent />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
