import React from 'react'
import Loading from './Loading'
import TicTacToe from './TicTacToe'
import Result from './Result'

const Main = (props) => {
  const { game: { data }, move, newGame } = props.control
  return data && move && newGame
    ? (
      <section id={'game'}>
        <TicTacToe state={data.state} move={move} />
        <button onClick={e => newGame()} className={'restart'}>Restart</button>
        <Result winner={data.winner} />
      </section>
    )
    : <Loading />
}

export default Main
