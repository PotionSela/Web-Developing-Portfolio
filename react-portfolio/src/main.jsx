import React from 'react'
// Importing the required imports from 'react-router-dom' to set up application routing behavior
import { BrowserRouter as Router } from 'react-router-dom';
// Importing the ReactDOM
import ReactDOM from 'react-dom/client'
// Importing the pages so the router will use these
import App from './App.jsx'
// Importing boostrap and index.css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
)
