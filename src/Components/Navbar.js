import React, { useRef } from 'react';
import { FaBars, FaTimes, FaBook, FaRecycle, FaUsers } from 'react-icons/fa';
import { GiBookPile } from 'react-icons/gi';
import openbook from './read.png'; // Ensure this path is correct
import check from './check.png'; // Ensure this path is correct
import './Admin.css';

function Navbar() {
  const navRef = useRef();
  const { logout } = useAuth();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div className="body">
      <div className="bg">
        <header>
          <div className="header-left">
            <img src={openbook} alt="" className="logo" />
            <div className="quote">
              <h4 style={{ fontFamily: 'Cursive', fontSize: '21px', fontWeight: 'bold' }}>
                A Room without Books is like a Body without a Soul
              </h4>
            </div>
          </div>
          <nav ref={navRef}>
            <a href="/#" style={{ fontFamily: 'Baskerville Old Face' }}>Home</a>
            <div className="dropdown">
              <button className="dropdown-button" style={{ fontFamily: 'Baskerville Old Face' }}>Books</button>
              <div className="dropdown-content">
                <a href="/ManageBooks">Manage Books</a>
                <a href="/AddBook">Add Book</a>
                <a href="/BookRequests">Book Requests</a>
              </div>
            </div>
            <a href="/#" style={{ fontFamily: 'Baskerville Old Face' }}>Users</a>
            <button className="log-out" onClick={logout}>LOG OUT</button>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
        <h2 className="heading">WELCOME TO ADMIN DASHBOARD</h2>
        <div className="card-arrange">
          <div className="row1">
            <FaBook className="books-icon" />
            <h4>Total Books</h4>
            <p className="count">169</p>
          </div>
          <div className="row1">
            <FaRecycle className="books-icon" />
            <h4>Books Returned</h4>
            <p className="count">25</p>
          </div>
          <div className="row1">
            <FaUsers className="books-icon" />
            <h4>Registered Users</h4>
            <p className="count">90</p>
          </div>
        </div>
        <div className="card-arrange">
          <div className="row2">
            <GiBookPile className="books-icon" />
            <h4>Books Borrowed</h4>
            <p className="count">60</p>
          </div>
          <div className="row2">
            <img src={check} alt="" className="users" />
            <h4>Active Users</h4>
            <p className="count">60</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
