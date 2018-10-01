import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Stack-Overflow-Logo.png'
import navButtons from '../../assets/Navpics.png'
/*import searchError from '../question/searchError' */

class Navbar extends Component {
    render() {
        return (
            <div className="sticky-top">
                <div className="navbar-top"></div>
                <nav className="navbar">
                    <Link to="/" className="nav-brand">
                        <img src={logo} alt="suncoast-overflow" width="200" />
                    </Link>
                    <form className="form-inline">
                    <Link to="/searchError"><input className="form-control mr-sm-2" type="text" placeholder="Search...">
                       </input></Link>
                    </form>
                    <img src={navButtons} alt="nav-buttons" height="40" />
                </nav>
            </div>
        );
    }
}

export default Navbar;
