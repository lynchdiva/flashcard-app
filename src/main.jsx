import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';
import { BrowserRouter } from 'react-router';
import App from './components/App/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
