import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

// index.css'
import '../styles/index.css';

// components
import SimpleCounter from './components/SimpleCounter';
import { Home } from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
