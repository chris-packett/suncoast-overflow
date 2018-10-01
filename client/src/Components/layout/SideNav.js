import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SideNav extends Component {
    render() {
        return (
            <div className="side-nav">
                <nav className="side-content">
                    <Link to="/" className="home-link">Home</Link>
                    <h6 className="side-nav-links">PUBLIC</h6>
                    <h6 className="side-nav-links">StackOverflow</h6>
                    <h6 className="side-nav-links">Tags</h6>
                    <h6 className="side-nav-links">Users</h6>
                    <h6 className="side-nav-links">Jobs</h6>
                    <section className="teams-qa">
                        <h4 className="team-link">Teams</h4>
                        <h6 className="side-nav-links">Q&A for work</h6>
                        <button> Learn More </button>
                    </section>
                </nav>
            </div>
        );
    }
}

export default SideNav;
