// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container/container.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import {Style} from './main.css';

const App = () => {
  return (
    <div id="React">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
