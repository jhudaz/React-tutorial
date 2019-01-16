import React, { Component } from 'react';
import App from './App';
import './App.css';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            comments:[
                "Hola mundo!",
                "Aún estoy aqui...",
                "Ya me voy!",
                "Volvi!"
            ]
        }
    }

    render(){
        return(
            <div>
               {this.state.comments.map(function(text,i){
                   return (<App>{text}</App>);
               })}
            </div>
        )
    }


}


export default Board;