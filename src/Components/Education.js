import React, { Component } from 'react';
import '../Styles/contents.css';
import Cards from './Cards'
class Education extends Component {
    render() {
        return (
            <div className="section-div">
                <div className="title-bar-div">
                    <h1>Education</h1>
                </div>
                <div className="section-content-div">
                    <Cards heading="San Jose State Unversity" content="Masters in Software Engineering" />
                    <Cards heading="Amrita Vishwa Vidyapeetham" content="Masters in Eelectronics and Communication Engineering" />
                </div>
            </div>
        )
    }
}
export default Education;