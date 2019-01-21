import React, {Component} from 'react';
import UserList from './containers/users_list';
import UserDetails from './containers/users_details';

class Test extends Component{
    render(){
        return(
            <div>
                <h1>Usuarios</h1>
                <UserList/>
                <hr/>
                <h1>Detalles</h1>
                <UserDetails/>
            </div>
        )
    }
}

export default Test;