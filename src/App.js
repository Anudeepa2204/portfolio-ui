import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ListItem from './Components/ListItem';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';

class App extends Component {
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
      this.setState({ person })
    })
  }
  handleClick = () => {
    this.setState({
      condition: !this.state.condition
    });
  }
  componentDidMount() {
  }
  render() {
    const menuVis = this.state.condition ? 'active' : '';
    console.log(this.state.condition)
    return (
      <div className="wrapper">
        <nav id="sidebar" className={menuVis} >
          <div className="sidebar-header">
            <div className="name-container">
              {this.state.person.fname} <br />
              {this.state.person.lname}
              <br />
              <span className="designation">
                Software Engineer
              </span>
            </div>
            <ul className="list-unstyled components">
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
        </nav>
        <div className="content">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" onClick={this.handleClick} className="btn btn-info">
              <i className="fas fa-bars"></i>
            </button>
            <div className="image-div">
              <div className="text-over-image-div">
                <h2> Life happens outside <br/> the <span className="highlighted-text">comfort</span> zone
                </h2>
              </div>
              <img src={require("./images/me.png")} style={{visibility:"hidden"}} alt={"Not found"}/>
            </div>
            <div id="about-div-id">
              <About />
            </div>
            <div id="education-div-id">
              <Education />
            </div>
            <div id="projects-div-id">
              <Projects />
            </div>
            <div id="experience-div-id">
              <Experience />
            </div>
            <div id="achievements-div-id">
              <Achievements />
            </div>
            <div id="skills-div-id">
              <Skills />
            </div>
            <div id="contact-div-id">
              <Contact />
            </div>
          </div>
        </div>
        <div id="overlay" className={menuVis} onClick={this.handleClick}></div>
      </div >
    );
  }
}

export default App;


