import React from 'react'
import Loading from './Loading'
import * as types from '../state/sagas/types'

const TicTacToe = ({ data: { state, winner }, dispatch }) => {
  const onClick = (idx) => {
    const type = winner ? types.NEW_GAME_REQUEST : types.NEW_MOVE
    dispatch({ type, payload: { idx, player: 'x' } })
  }

  return (
    <section id={'tic-tac-toe'}>
      { state
        ? state.map((value, idx) =>
          <li
            onClick={e => onClick(idx)}
            key={idx}
            className={state.winner || value}
          />)
        : <Loading />
      }
    </section>
  )
}

export default TicTacToe
