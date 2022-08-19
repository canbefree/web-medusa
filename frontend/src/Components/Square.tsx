import React, { Component } from 'react'


interface BoardProps{
    value:string 
}

export class Square extends Component<BoardProps> {
  render() {
    return (
      <div>Square {this.props.value}</div>
    )
  }
}

export default Square