import React, { Component } from 'react';
import '../Styles/contents.css';
class About extends Component {
    render() {
        return (
            <div className="section-div">
                <div className="title-bar-div">
                    <h1>ABOUT</h1>
                </div>
                <div className="section-content-div">
                    <blockquote>
                        An inquisitive Software Engineer with experience in front-end and back-end development. Passionate about Software/System Security.
                    </blockquote>
                </div>
                <p id="about-content">
                    I am fascinated by Operating Systems, Hypervisor Technology,
                    Blockchain Technology, Distributed Systems, and Enterprise Software Development.
                    Trying to get a grip on these technologies and grow as an engineer.
                    <br />  <br />
                    I love to code in Java, C++, JavaScript and I recently started working with Go and
                    I feel it is the ultimate programming language.
                    I am an active learner at EdX and a problem solver at Codility and LeetCode and like to attend tech meet-ups.
                    <br />
                    <br />
                    I love singing, acrylic painting, poetry, teaching, and yoga. I enjoy learning new languages (not just the programming ones).
                    </p>
            </div>
        )
    }
}
export default About;