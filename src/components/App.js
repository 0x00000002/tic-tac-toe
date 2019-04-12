import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'

export default class App extends Component {
  async componentDidMount () {
    this.props.newGame()
  }

  render () {
    return (
      <div>
        <Header />
        <Main control={this.props} />
      </div>
    )
  }
}
