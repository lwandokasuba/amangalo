import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes';
import './index.css';
import { DataProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataProvider>
      <Root />
    </DataProvider>
  </React.StrictMode>,
);
