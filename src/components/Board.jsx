import React, { Component, PropTypes } from 'react'

import { map, addIndex, indexOf } from 'ramda'

import Square from './Square.jsx'

const mapIndexed = addIndex(map)

class Board extends Component {

  player (square) {
    let idx = indexOf(square, this.props.moves)

    if (idx !== -1) {
      return (idx % 2 === 0) ? 'x' : 'o'
    }
  }

  handleMove (idx) {
    this.props.moveCb(idx)
  }

  render () {
    let squares = mapIndexed((_, idx) => {
      return <Square
        key={idx}
        player={this.player(idx)}
        clickCb={this.handleMove.bind(this, idx)}
      />
    }, new Array(9))
    return <div className='board'>
      {squares}
    </div>
  }
}

Board.propTypes = {
  moves: PropTypes.array.isRequired,
  moveCb: PropTypes.func.isRequired
}

export default Board
