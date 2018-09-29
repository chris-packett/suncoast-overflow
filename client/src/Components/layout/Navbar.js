import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Stack-Overflow-Logo.png'
import Navpics from '../../assets/Navpics.png'

class Navbar extends Component {
    render() {
        return (
            <div>
                <span className="topofnav sticky-top"> </span>
                <nav className="navbar">
                    <Link to="/" className="nav-brand">
                        <img src={logo} alt="suncoast-overflow" width="200" />
                    </Link>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search..." />
                        <button className="btn btn-outline-primary">Search</button>
                    </form>
                    <img src={Navpics} alt="notuseful-buttons" height="50" />
                </nav>
            </div>
        );
    }
}

export default Navbar;
