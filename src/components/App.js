import React from 'react'
import Header from './Header'
import Main from './Main'

const defaultGame = { move: 'x', state: [] }  // TODO: Remove it with redux state

const App = () => (
  <section>
    <Header />
    <Main game={defaultGame} />
  </section>
)

export default App
