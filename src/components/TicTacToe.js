import React from 'react'

const TicTacToe = ({ game }) => {
  const { state, ops: { move } } = game
  const player = 'x' // TODO: player can choose who to play: X or O

  return (
    <section id={'tic-tac-toe'}>
      { state && state.map((value, idx) =>
        <li onClick={e => move(state, player, idx)} key={idx} />) }
    </section>
  )
}

export default TicTacToe
