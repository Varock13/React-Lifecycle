import React from 'react';

class Clock extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            date : new Date()
        };
    }

    render(){
        return(
        <div>
            <h2>Hello, World</h2>
            <h2>It's {this.state.date.toLocaleTimeString()}</h2>
        </div>
        );
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.timerId = setInterval( ()=> this.tick(), 1000 );
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        });
            
        
    }
}

export default Clock;