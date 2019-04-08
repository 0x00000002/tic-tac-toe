import React from 'react'
import Loading from './Loading'
import TicTacToe from './TicTacToe/'

const Main = (props) =>
  // Other components could be added later (e.g. players online lists or just ADs)
  props && props.game ? <TicTacToe game={props.game} /> : <Loading />

export default Main
