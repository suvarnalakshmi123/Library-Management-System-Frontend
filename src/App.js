import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Components/LoginPage';
import AdminPage from './Components/AdminPg';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/AdminPg" element={<AdminPage />} /> {/* Use AdminPage here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
