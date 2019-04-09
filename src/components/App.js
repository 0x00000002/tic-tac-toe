import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'

export default class App extends Component {
  async componentDidMount () {
    this.props.loadGame()
  }

  render () {
    return (
      <div>
        <Header />
        <Main game={this.props.game} move={this.props.move} />
      </div>
    )
  }
}
