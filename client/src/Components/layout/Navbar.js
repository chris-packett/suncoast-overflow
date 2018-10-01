import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/Stack-Overflow-Logo.png'
import navButtons from '../../assets/Navpics.png'
import history from '../../history'
/*import searchError from '../question/searchError' */

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        history.replace("/searchError")
        this.setState({
            searchTerm: ''
        })
    }

    render() {
        return (
            <div className="sticky-top">
                <div className="navbar-top"></div>
                <nav className="navbar">
                    <Link to="/" className="nav-brand">
                        <img src={logo} alt="suncoast-overflow" width="200" />
                    </Link>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search..."
                            name="searchTerm" 
                            onChange={this.handleChange}
                        >
                        </input>
                    </form>
                    <img src={navButtons} alt="nav-buttons" height="40" />
                </nav>
            </div>
        );
    }
}

export default Navbar;
