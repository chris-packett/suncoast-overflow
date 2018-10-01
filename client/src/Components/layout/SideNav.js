import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
            <div className="side-nav">
                <nav>
                    <section className="side-content">
                        <section>
                            <h6 className="home-link">Home</h6>
                        </section>
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
                    </section>
                </nav>
            </div>
        );
    }
}

export default SideNav;
