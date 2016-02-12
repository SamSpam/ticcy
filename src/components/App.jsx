import React, { Component } from 'react'

import { head, tail } from 'ramda'

import Board from './Board.jsx'

class App extends Component {
  constructor (props) { //instantiates App class/accepts props hash
    super(props)
    this.state = {
      games: [
        {
          moves: []
        },
        {
          moves: [4, 3, 0, 1, 2, 5, 6]
        }
      ]
    }
  }

  newGame () {
    this.setState({
      games: [ { moves: [] }, ...this.state.games ]
    })
  }

  handleMove (square) {
    let game = head(this.state.games)
    let others = tail(this.state.games)

    game.moves = [ ...game.moves, square ]

    this.setState({
      games: [ game, ...others ]
    })
  }

  render () {//determines output of Component in React, every time props or state changes
    return <div>
      <Board
        moves={head(this.state.games).moves}
        moveCb={this.handleMove.bind(this)}
      />
      <button onClick={this.newGame.bind(this)}>New Game</button>
    </div>
  }
}

export default App
