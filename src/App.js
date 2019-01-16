import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
constructor(props){
  super(props);
  this.state={
    edit:false,
  }

  this.edit = this.edit.bind(this);
  this.save = this.save.bind(this);
}
  edit(){
    this.setState({edit:true});
  }
  delete(){
    //nothing for the moment
  }
  save(){
    var  textValue= this.refs.textArea.value;
    console.log("new comment: ",textValue);
    this.setState({edit:false});
  }
  renderNormal(){
    return(
      <div className="component">
        <div className="title">
          {this.props.children}
        </div>
        <button onClick={this.edit} className="caution">Edit</button>
        <button className="danger">Delete</button>
      </div>
    )
  }
  renderForm(){
    return(
      <div className="component">
          <div className="title">
            <textarea  ref="textArea" defaultValue={this.props.children}></textarea>
          </div>
          <button onClick={this.save} className="primary">Save</button>
          
      </div>
    )
  }
  
  render() {
    if(this.state.edit){
      return this.renderForm();
    }else{
      return this.renderNormal();
    }
  }
}

export default App;
