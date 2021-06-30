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
                 {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ></input>
                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
                </nav>
                </header>
                <br></br> 
                <br></br>
                <br></br>

                {/* <nav className="navbar navbar-expand-md nav-dark bg-dark">
                         <div><a href="/"className="navbar-brand">User Management App</a></div>
                    </nav> */}
            </div>
        )
            
    }
}

export default HeaderComponent