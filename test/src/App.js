import React from 'react';
import './App.css';
import Home from './components/screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/screens/login'; // Adjusted import path for Login
import History from './components/screens/History'; // Adjusted import path for History
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route path="/History" element={ <History /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
