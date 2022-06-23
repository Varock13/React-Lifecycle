import React from "react";
import Clock from './ModernClock';

class Controls extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active : false
        };
    }

    render(){
        return(
            <>
            <button onClick={  ()=> this.setState( { active: !this.state.active } ) } >
                {this.state.value ? "On" : "Off"} 
            </button>
            {
                this.state.active ? 
                <Clock /> : 
                <p>Clock is Off</p>
            }
            </>
        );
    }
}

export default Controls;