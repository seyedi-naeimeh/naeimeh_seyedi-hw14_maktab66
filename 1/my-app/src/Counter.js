import React, { Component } from 'react';
import Button  from './component/Button';

class Counter extends Component {
    
    constructor() {
        super();
        this.state={

            counter:0

        }
        
    }
    incrementCount(){
        
        this.setState({
            counter: this.state.counter + 1
        })
       
    }
    decrementCount(){
    
        this.setState({
            
            counter: this.state.counter <= 0 ? 0 : this.state.counter - 1
        })
        
    }
  render() {
    
    return (
      <div className='counter'>
            <div>
                <h1 >{this.state.counter}</h1>
            </div>
            <div className='buttons'>
            
                <Button title="increase" clickHandler={this.incrementCount.bind(this)} />
                <Button title="decrease" clickHandler={this.decrementCount.bind(this)} />
            
             </div>
      </div>
      
    )
  }
}

export default Counter;