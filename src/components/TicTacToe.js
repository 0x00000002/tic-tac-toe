import React, { useState } from 'react'

const TicTacToe = (props) => {
  const { game: { lastMove, state }, ops } = props
  const { move, checkMove } = ops
  const [player, setPlayer] = useState(lastMove || 'x')

  const switchPlayer = () => setPlayer(player === 'x' ? 'o' : 'x')

  const nextMove = (idx) => {
    move(state, player, idx)
    checkMove()
    switchPlayer()
  }

  return (
    <section id={'tic-tac-toe'}>
      { state && state.map((value, idx) => <li onClick={e => nextMove(idx)} key={idx} />) }
    </section>
  )
}

export default TicTacToe
