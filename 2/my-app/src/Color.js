import React, { Component } from 'react'

class Color extends React.Component {
    
  
  render () {
    const style={
        backgroundColor: this.props.newColor
    }
    return(
        <div className='container'>
            <li className='box' style={style}></li>
            <li >{this.props.newColor}</li>
        </div>
        
    )
   
  }
};

export default Color;