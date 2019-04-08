import React from 'react'

const TicTacToe = ({ state = [] }) => {
  return (
    <section id={'tic-tac-toe'}>
      { state && state.map(idx => <li id={idx} />) }
    </section>
  )
}

export default TicTacToe
