import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Square from './Components/Square'



export class Board extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Square value="123"/>
      </div>
    )
  }
}


export default Board