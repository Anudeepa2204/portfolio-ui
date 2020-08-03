import React, { Component } from 'react';
import '../Styles/contents.css';
import Cards from './Cards'
import axios from 'axios';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {
                title: "",
                description: [],
                repo: "",
                imgurl: ""
            }
        }
    }
    componentWillMount() {
        let project;
        axios.post('http://localhost:3001/projects').then(res => {
            project = res.data;
            console.log(project);
            this.setState({ project })
        })
    }
    render() {
        return (
            <div className="section-div">
                <div className="title-bar-div">
                    <h1>Projects</h1>
                </div>
                <div className="section-content-div">
                    <div className="card-holder-div">
                        <Cards />
                        <Cards />
                    </div>
                    <div className="card-holder-div">
                        <Cards />
                        <Cards />
                    </div>
                    {/* <Cards />
                    <Cards /> */}
                </div>
            </div>
        )
    }
}
export default Projects;