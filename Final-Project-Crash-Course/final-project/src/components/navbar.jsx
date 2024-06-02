import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/ticketcreate">Ticket Create</Link></li>
        <li><Link to="/ticketedit">Ticket Edit</Link></li>
        <li><Link to="/ticketview">Ticket View</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" > Sign Up</Link></li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navbar;
