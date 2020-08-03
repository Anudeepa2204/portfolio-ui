import React, { Component } from 'react';
import '../Styles/drawer.css'
import ListItem from './ListItem';
class Drawer extends Component {
    render() {
        return (
            <div className="left-drawer-window">
                <div className="name-container">
                    {this.props.fname} <br />
                    {this.props.lname}
                    <br />
                    <span className="designation">
                        Software Engineer
                    </span>
                </div>
                {/* <SideNav>
                    <Nav id={'1'}>1</Nav>
                    <Nav id={'2'}>2</Nav>
                </SideNav> */}

                <ul className="left-drawer-list">
                    <ListItem link="#about-div-id" title="About" icon="fas fa-user" />
                    <ListItem link="#education-div-id" title="Education" icon="fas fa-graduation-cap" />
                    <ListItem link="#projects-div-id" title="Projects" icon="fa fa-star" />
                    <ListItem link="#experience-div-id" title="Experience" icon="fa fa-briefcase" />
                    <ListItem link="#achievements-div-id" title="Achievements" icon="fa fa-flag-checkered" />
                    <ListItem link="#skills-div-id" title="Skills" icon="fa fa-cubes" />
                    <ListItem link="#contact-div-id" title="Contact" icon="fas fa-address-card" />
                    <ListItem link="https://docs.google.com/document/d/18DIeLevVKHvBrcPFix08O4qJXiDtOcZg6j38ltlev68/edit?usp=sharing" target="_blank" title="Resume" icon="fa fa-file-pdf" />
                </ul>
            </div>
        );
    }
}

export default Drawer;