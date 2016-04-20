/**
 * Created by 0514-3604-cect on 4/18/2016.
 */
import React from 'react';

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            name: 'student'
        }
     this.onChange=this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            name:e.target.value
        })
    }


    render(){

        return (
            <div>
            <h1><font color="pink">Welcome to ReactJS {this.state.name} </font></h1>
            <strong>Enter your name</strong><br />
            <form>
            <input type="text" onChange={this.onChange.bind(this)} />
            </form>
        </div>
    )
    }
}