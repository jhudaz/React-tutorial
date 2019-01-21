import React, { Component } from "react";
import "./App.css";
import { saveComment } from './actions/comments';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      texto: ''
    };

    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
  }
  edit() {
    this.setState({ edit: true });
  }
  delete() {
    this.props.deleteComment(this.props.index);
  }
  save() {
    this.props.saveComment(this.props.index,this.state.texto);
    this.setState({ edit: false });
  }
  renderNormal() {
    return (
      <div className="component">
        <div className="title">{this.props.children}</div>
        <button onClick={this.edit} className="caution">
          Edit
        </button>
        <button onClick={this.delete} className="danger">
          Delete
        </button>
      </div>
    );
  }
  renderForm() {
    return (
      <div className="component">
        <div className="title">
          <input type="text" value={this.state.texto} onChange={pepito => this.setState({ texto: pepito.target.value })} />
        </div>
        <button onClick={this.save} className="primary">
          Save
        </button>
      </div>
    );
  }

  render() {
    if (this.state.edit) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveComment }, dispatch)
}

export default connect(undefined,mapDispatchToProps)(App);
