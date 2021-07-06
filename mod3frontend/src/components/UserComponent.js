import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
//Passing props object
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.addPersons = this.addPersons.bind(this);
        this.deletePersons = this.deletePersons.bind(this);
        this.refreshData = this.refreshData.bind(this);
    }
    //Lifecycle method that will implement immediately once component is mounted
    componentDidMount(){
       this.refreshData();
    }

    addPersons(){
        this.props.history.push('/add-persons');
    }
    
    deletePersons(event){
        UserService.deleteUsersById(event.target.id).then((response) => {
            console.log(response);
            this.refreshData();
        });
    }

    refreshData(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data});
        });
    }

//Creating table to display list
    render(){
        return(
            <div>
                <h1 className = "text-center"> Users List </h1>
                <div className ="row">
                    <button className="btn btn-primary" onClick={this.addPersons}> Add to List</button>
                </div>
                <table className = "table table-striped table-bordered">
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
                                    <td><button id= {user.id} type="button" className="btn btn-outline-primary" onClick={this.deletePersons}>Remove</button></td>
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