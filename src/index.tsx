import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeSwitchProvider } from './hook/ThemeSwitchContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeSwitchProvider>
        <App />
      </ThemeSwitchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
