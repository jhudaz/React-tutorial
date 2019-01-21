import React, { Component } from "react";
import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {  addComment } from './actions/comments';


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
    this.eachComment = this.eachComment.bind(this);
  }
  //function to add a new Comment!
  add(text) {
    var newComment = this.state.comments;
    newComment.push(text);
    this.setState({ comments: newComment });
  }
  //function to delete a comment!
  delete(i) {
    console.log("The comment deleted was the #", i);
    var newArr = this.state.comments;
    newArr.splice(i, 1); //slice function take two parameters that are the index where it start and how many elements should delete
    this.setState({ comments: newArr });
  }
  //function to edit a comment!
  update(nextText, i) {
    console.log("The comment was updated!");
    var newArr = this.state.comments;
    newArr[i] = nextText;
    this.setState({ comments: newArr });
  }
  //this function it will put the  text using the elements inside of comments state  into the App component
  eachComment(comment, i) {
    return (
      //we are going to send a function to the other component through a property with a any nick that we want to use
      <App
        key={i}
        index={comment.id}
        updateComment={this.update}
        deleteComment={this.delete}
      >
        {comment.comment}
      </App>
    );
  }
  //here we only map the elements inside comments state
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.addComment()}
          className="primary"
        >
          Add Comment
        </button>
        <div>{this.props.defaultCommentReducer.map(this.eachComment)}</div>
      </div>
    );
  }
}
function mapStateToProps({defaultCommentReducer}) {
  return {
    defaultCommentReducer
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Board);
