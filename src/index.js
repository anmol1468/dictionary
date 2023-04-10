import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function updateColorScheme(isNightMode) {
  const root = document.documentElement;

  if (isNightMode) {
    root.style.setProperty('--primary-color', '#ffffff');
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--text-color', '#ffffff');
  } else {
    root.style.setProperty('--primary-color', '#872487');
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
  }
}

root.render(
  <React.StrictMode>
    <App changeTheme={updateColorScheme} />
  </React.StrictMode>
);

// updateColorScheme(true);