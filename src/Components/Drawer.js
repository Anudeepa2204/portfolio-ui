import React, {Component} from 'react';
import '../Styles/drawer.css'
import ListItem from './ListItem';
import axios from "axios";

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fname: "",
                lname: "",
                phone: "",
                email: "",
                github: "",
                linkedin: "",
                blog: "",
                address: "",
                twitter: "",
                photo: ""
            },
            condition: false
        };
    }


    componentWillMount() {
        let person;
        axios.get('http://localhost:3001').then(res => {
            person = res.data;
            this.setState({person})
        })
    }
    render() {
        return (
            <div className="left-drawer-window">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <div className="name-container">
                            {this.state.person.fname} <br/>
                            {this.state.person.lname}
                            <br/>
                            <span className="designation">Software Engineer</span>
                        </div>
                        <ul className="list-unstyled components">
                            <ListItem link="#about" title="About" icon="fas fa-user"/>
                            <ListItem link="#education" title="Education"
                                      icon="fas fa-graduation-cap"/>
                            <ListItem link="#projects" title="Projects" icon="fa fa-star"/>
                            <ListItem link="#experience" title="Experience"
                                      icon="fa fa-briefcase"/>
                            <ListItem link="#skills-div-id" title="Skills" icon="fa fa-cubes"/>
                            <ListItem link="#contact-div-id" title="Contact"
                                      icon="fas fa-address-card"/>
                            <ListItem
                                link="https://docs.google.com/document/d/18DIeLevVKHvBrcPFix08O4qJXiDtOcZg6j38ltlev68/edit?usp=sharing"
                                target="_blank" title="Resume" icon="fa fa-file-pdf"/>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Drawer;