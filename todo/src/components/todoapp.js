/**
 * Created by 0514-3604-cect on 4/18/2016.
 */
import React from 'react';
import TodoItem from './todoItem'

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            mytodo:'',
            list:[ 
            ]
        };
        
    }
    
    onChange=(e)=>{
        this.setState({
            mytodo:e.target.value
        })
    }
    
    onAddItem=()=>{
        var listx = this.state.list;
        listx.push(this.state.mytodo)
        
        this.setState({
            list:listx
        })
    };
    
    
    onKeyUp=(e)=>{
            if( e.key==='Enter'){
                let  tmp = this.state.list;
                tmp.push(this.state.mytodo);
                this.setState({
                    list:tmp,
                    mytodo:''
                })
            }
        }
    
    deleteMe=(index)=>{
          var tmp=this.state.list;
          tmp.splice(index,1);
          this.setState({
              list:tmp
          });
    };
    
    render(){
        
       
        let items=[];
        for(var i=0;i<this.state.list.length;i++){
                items.push(<TodoItem key={i}
                                    description={this.state.list[i]}
                                    index={i}
                                    removeMe={this.deleteMe}
                                    />);
        }

 console.log(items);
        return (
            <div className="todoapp">
            <h1 className="header">My Todo List</h1>
            <input type="text" placeholder="What needs to be done?"
                   onChange={this.onChange} 
                value={this.state.mytodo}
                onKeyUp={this.onKeyUp}
                />
            
            {items}
          
            </div>
        );
    }
}