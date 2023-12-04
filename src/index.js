// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/test.js';

const App = () => {
  return (
    <div>
      <h1>Hello, React 18!</h1>
      <TestComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
