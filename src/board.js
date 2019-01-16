import React, { Component } from 'react';
import App from './App';
import './App.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                "Hola mundo!",
                "Aún estoy aqui...",
                "Ya me voy!"
            ]
        }
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }
    delete(i) {
        console.log("The comment deleted was the #", i);
        var newArr = this.state.comments;
        newArr.slice(i, 1);//slice function take two parameters that are the index where it start and how many elements should delete
        this.setState({ comments: newArr });
    }
    update(nextText, i) {
        console.log("The comment was updated!");
        var newArr = this.state.comments;
        newArr[i] = nextText;
        this.setState({ comments: newArr });
    }
    //this function it will put the  text using the elements inside of comments state  into the App component
    eachComment(text, i) {
        return (
            //we are going to send a function to the other component through a property with a any nick that we want to use
            <App key={i} index={i} updateComment={this.update} deleteComment={this.delete} >
                {text}
            </App>
        );
    }
    //here we only map the elements inside comments state 
    render() {
        return (
            <div>
                {this.state.comments.map(this.eachComment)}
            </div>
        )
    }


}

export default Board;
