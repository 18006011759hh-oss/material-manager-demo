import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { DemoStateProvider } from './context/DemoStateContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DemoStateProvider>
      <App />
    </DemoStateProvider>
  </React.StrictMode>,
);
