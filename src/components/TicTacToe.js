import React from 'react'
import Loading from './Loading'

const TicTacToe = ({ state, move }) =>
  <section id={'tic-tac-toe'}>
    { state ? state.map((value, idx) =>
        <li onClick={e => move(idx)} key={idx} className={state.winner || value} />)
      : <Loading />
    }
  </section>

export default TicTacToe
