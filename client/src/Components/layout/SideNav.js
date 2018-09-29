import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
            <div className="SideNav">
                <nav>
                <section className="Sidecontent">
                        <section>
                            <h2 className="homelink"> Home </h2>
                        </section>
                        <h3 className="sidenavlinks"> PUBLIC </h3>
                        <h4 className="sidenavlinks"> StackOverflow </h4>
                        <h4 className="sidenavlinks"> Tags </h4>
                        <h4 className="sidenavlinks"> Users </h4>
                        <h4 className="sidenavlinks"> Jobs </h4>
                        <section className="teamsqa">
                            <h2 className="teamlink"> Teams</h2>
                            <h4 className="sidenavlinks"> Q&A for work</h4>
                            <button> Learn More </button>
                        </section>
                        </section>
                </nav>
            </div>
        );
    }
}

export default SideNav;
