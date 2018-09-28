import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-light bg-light mb-5">
                <Link to="/" className="nav-brand">
                    <img src="../assets/Stack-Overflow-Logo.png" alt="suncoast-overflow" width="200" />
                </Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search..." />
                    <button className="btn btn-outline-primary">Search</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;
