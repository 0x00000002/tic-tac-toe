import React from 'react'
import Loading from './Loading'
import TicTacToe from './TicTacToe'

const Main = (props) =>
  // Other components could be added later (e.g. players online lists or just ADs)
  props && props.game ? (
    <section id={'game'}>
      <TicTacToe game={props.game} ops={props.ops} />
    </section>
  ) : <Loading />

export default Main
