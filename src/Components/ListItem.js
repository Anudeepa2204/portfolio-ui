import React, { Component } from 'react';
import '../Styles/ListItem.css';
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                link: "",
                title: "",
                icon: ""
            }
        }
    }
    componentWillMount() {
        const item = this.props;
        this.setState({
            item: item
        })
    }
    render() {
        return (
            <div className="list-div">
                <a href={this.state.item.link} target={this.props.target}>
                    <li>
                        <i className={this.state.item.icon}></i>
                        <span id="title" className="title-span">
                            {this.state.item.title}
                        </span>
                    </li>
                </a>
            </div>
        );
    }
}

export default ListItem;