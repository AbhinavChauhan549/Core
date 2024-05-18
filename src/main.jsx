// src/main.jsx
import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider, { ThemeContext } from './ThemeContext';
import './index.css';

const Main = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return <App />;
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
