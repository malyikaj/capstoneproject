import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
//Passing props object
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    //Lifecycle method that will implement immediately once component is mounted
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data});
        });
    }

//Creating table to display list
    render(){
        return(
            <div>
                <h1 className = "text-center"> Users List </h1>
                
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>User Name</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.user_name}</td>
                                    <td>{user.user_email}</td>
                                    <td><button type="button" class="btn btn-outline-secondary">Remove</button></td>
                                </tr>  
                            )
                            
                        }
                    </tbody>
                </table>
            </div>
        )
            
    }
}

export default UserComponent;