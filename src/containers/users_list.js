import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';


class UserList extends Component {

    createListItems() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}</li>
            );
        })
    }
    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )
    }

}

// we have to use the "function"  keyword if is not inside into a class

//this function connect the reducer with the container
function mapStateToProps(state) {
    return {
        users: state.UserReducer
    };
}
//this function connect the action  with the container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser }, dispatch);
}

//como y cuando recibe el parametro mapStateToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps)(UserList);