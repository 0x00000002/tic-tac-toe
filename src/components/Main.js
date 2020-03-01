import React from 'react'
import Loading from './Loading'
import TicTacToe from './TicTacToe'
import Result from './Result'
import * as types from '../state/sagas/types'

const Main = ({ control }) => {
  const {
    game: { data },
    dispatch
  } = control

  return data ? (
    <section id='game' className={data.winner}>
      <TicTacToe data={data} dispatch={dispatch} />
      <button
        onClick={e => dispatch({ type: types.NEW_GAME_REQUEST })}
        className='restart'
      >
        Restart
      </button>
      <Result winner={data.winner} />
    </section>
  ) : (
    <Loading />
  )
}

export default Main
