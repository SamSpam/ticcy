import React, { Component, PropTypes } from 'react'

class Square extends Component {
  handleClick () {
      this.props.clickCb()
    }

  render () {
    let { player } = this.props

    return <div className={player} onClick={this.handleClick.bind(this)}>
      {this.props.player}
    </div>
  }
}

Square.propTypes = {
  player: PropTypes.string,
  clickCb: PropTypes.func.isRequired
}

export default Square
