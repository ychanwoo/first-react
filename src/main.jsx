import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Signup from './Signup.jsx';
import Login from './login.jsx';
import WooRouter from './component/WooRouter';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(<WooRouter />);
