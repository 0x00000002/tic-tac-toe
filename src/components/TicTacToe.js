import React from 'react'

const TicTacToe = ({ state, move }) =>
  <section id={'tic-tac-toe'}>
    { state && state.map((value, idx) =>
      <li onClick={e => move(idx)} key={idx} className={value} />) }
  </section>

export default TicTacToe
