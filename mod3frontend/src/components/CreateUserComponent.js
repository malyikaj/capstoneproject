import React, { Component } from 'react'
// import UserService from '../services/UserService';


class CreateUserComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserEmailHandler = this.changeUserEmailHandler.bind(this);
    }

    savePersons = (e) => {
         e.preventDefault();
         let person = {firstName: this.state.firstName, lastName: this.state.lastName, userName: this.state.userName, emailId: this.state.emailId};
         console.log('person => ' + JSON.stringify(person)); 

        //  UserService.addPersons(person).then(res =>) {
        //     this.props.history.push('persons');
        // };
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName : event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName : event.target.value});
    }
 
    changeUserNameHandler = (event) => {
        this.setState({userName : event.target.value});
    }

    changeUserEmailHandler = (event) => {
        this.setState({emailId : event.target.value});
    }

    cancel(){
        this.props.history.push('/add-persons'); 
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3">
                            <h3 className= "text-center">Add User</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>First Name : </label>
                                        <input placeholder="" name="firstName" className="form-control"
                                         value ={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <br>

                                    </br>
                                    <div className = "form-group">
                                        <label>Last Name : </label>
                                        <input placeholder="" name="lastName" className="form-control"
                                         value ={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <br>

                                    </br>
                                    <div className = "form-group">
                                        <label>User Name : </label>
                                        <input placeholder="" name="userName" className="form-control"
                                         value ={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <br>

                                    </br>
                                    <div className = "form-group">
                                        <label>User Email :</label>
                                        <input placeholder="" name="userEmail" className="form-control"
                                         value ={this.state.userEmail} onChange={this.changeUserEmailHandler} />
                                    </div>
                                    <br>

                                    </br>

                                    <button className= "btn btn-success" onClick={this.savePersons}>Save</button>
                                    <button className="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUserComponent
