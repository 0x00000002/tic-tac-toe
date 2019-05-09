import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import * as types from '../state/sagas/types'

export default class App extends Component {
  async componentDidMount () {
    this.props.dispatch({ type: types.NEW_GAME_REQUEST, payload: null })
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
