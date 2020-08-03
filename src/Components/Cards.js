import React, { Component } from 'react';
import '../Styles/cards.css';


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_item: {
                heading: "",
                content: ""
            }
        };
    }
    componentWillMount() {
        const item = this.props;
        this.setState({
            card_item: item
        })
    }
    render() {

        return (
            <div className="card">
                <div className="container">
                    <h4><b>{this.state.card_item.heading}</b></h4>
                    <p>{this.state.card_item.content}</p>
                </div>
            </div>
        )
    }

}
export default Cards;