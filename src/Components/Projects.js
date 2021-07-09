import React, { Component } from 'react';
import '../Styles/contents.css';
import Cards from './Cards'
import axios from 'axios';

class Projects extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            project: []
        }
    }
    componentWillMount() {
        let project;
        axios.get('http://localhost:3001/projects').then(res => {
            project = res.data;
            this.setState({ project })
        })
    }
    render() {
        var projects = this.state.project;
        return (
            <div className="section-div">
                <div className="title-bar-div">
                    <h1>Projects</h1>
                </div>
                <div className="section-content-div">
                    {
                        projects.map((pro) => {
                            return (
                                <div className="card-holder-div">
                                    <div className="card">
                                        <div className="container">
                                            <h4><b>{pro.title}</b></h4>
                                            <p className="description">{pro.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Projects;