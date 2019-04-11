import React from 'react'
import Loading from './Loading'
import TicTacToe from './TicTacToe'

const Main = ({ game, move }) =>
  game && game.data && game.data.state && move
    ? (
      <section id={'game'}>
        <TicTacToe state={game.data.state} move={move} />
      </section>
    )
    : <Loading />

export default Main
