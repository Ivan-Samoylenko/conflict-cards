import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';
import { App } from 'components/App';
import Global from 'Global.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <Global />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
