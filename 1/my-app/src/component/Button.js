import React, { Component } from 'react'


 class Button extends Component {
  
  render() {
    return (
        <div >
            <button  className='btnCounter' onClick={this.props.clickHandler}>{this.props.title}</button>
            
        </div>
   
    )
  }
}


export default Button;
