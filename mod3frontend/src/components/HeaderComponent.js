import React from 'react';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }


    render(){
        return(
            <div>
                <header>
                <nav className="navbar navbar-light bg-light justify-content-between">
                 <a href="/"className="navbar-brand" style={{marginLeft: "40px"}}>User List App</a>
                 <form className="form-inline">
                 
                </form>
                </nav>
                </header>
                <br></br> 
                <br></br>
                <br></br>

             
            </div>
        )
            
    }
}

export default HeaderComponent