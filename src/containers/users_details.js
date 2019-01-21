import React,{Component} from 'react';
import{connect} from 'react-redux';

class UserDetails extends Component{
    
    render(){
        return(
            <div>
                <img src={this.props.user.thumbnail} alt="thumbnail user"/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age:{this.props.user.age}</h3>
                <h3>Description:{this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.ActiveUserReducer
    }
}
//smart container
export default connect(
    mapStateToProps)(UserDetails)