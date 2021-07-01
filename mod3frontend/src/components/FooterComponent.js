import React from 'react';


class FooterComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
           
        }
    }


    render(){
        return(
            <div>
               <footer className = "footer">
                    <span className = "text-muted "> Mod 3 Project 2021 </span>
               </footer>
            </div>
        )
            
    }
}

export default FooterComponent