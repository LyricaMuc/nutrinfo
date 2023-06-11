import React, { useState } from 'react';
import Navigation from './components/Navigation';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <Navigation />
    </div>
  );
}

export default App;
