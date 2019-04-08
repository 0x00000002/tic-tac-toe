import React from 'react'
import Header from './Header'
import Main from './Main'

// TODO: Get it from redux
const ops = { move: {}, checkMove: {} }
const game = {
  move: 'x',
  state: [ '', '', '', '', '', '', '', '', '' ]
}

const App = () => (
  <div>
    <Header />
    <Main game={game} ops={ops} />
  </div>
)

export default App
