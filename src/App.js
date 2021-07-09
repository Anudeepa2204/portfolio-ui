import React, {Component} from 'react';
import './App.css';
import About from '../src/Components/About.js'
import Education from "./Components/Education";
import Drawer from "./Components/Drawer";
import Projects from "./Components/Projects";

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{boxSizing: 'inherit'}}>
                <Drawer/>
                <main>
                    <section id="intro" className="section full-height">
                        <div className="text-over-image-div">
                            <h2><span className="highlighted-text"> Life</span> happens
                                outside <br/> the <span
                                    className="underlined-text"> comfort</span> zone
                            </h2>
                        </div>
                    </section>
                    <section id="about" className="section">
                        <About/>
                    </section>

                    <section id="education" className="section full-height">
                        <Education/>
                    </section>
                    <section id="projects" className="section full-height">
                        <Projects/>
                    </section>

                    <section></section>
                </main>
                {/*    </div>*/}
                {/*    <div id="experience-div-id">*/}
                {/*      <Experience />*/}
                {/*    </div>*/}
                {/*    <div id="achievements-div-id">*/}
                {/*      <Achievements />*/}
                {/*    </div>*/}
                {/*    <div id="skills-div-id">*/}
                {/*      <Skills />*/}
                {/*    </div>*/}
                {/*    <div id="contact-div-id">*/}
                {/*      <Contact />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div id="overlay" className={menuVis} onClick={this.handleClick}></div>*/}
            </div>
        );
    }
}

export default App;


