import React, { Component } from 'react'
import Color from './Color';

 class ColorGenerator extends Component {
    constructor(){
        super();
        this.state={
            colors : [ ]
        }
       
    }
  
   updateColor () {
    const currentColor = '#'+ Math.floor(Math.random()*16777215).toString(16)
    this.setState({colors: [...this.state.colors,currentColor]})
    
 }
  
  render() {

    return (
      <ul style={{listStyle: "none"}}>
        <li>
            <button onClick={this.updateColor.bind(this)}>Add Color</button>
        </li>
       
        {this.state.colors.map(color => <Color newColor={color}/>)}

      </ul>
      
    )
    
  }
}


export default ColorGenerator;