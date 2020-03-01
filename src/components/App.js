import React, { useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import * as types from '../state/sagas/types'

const App = ({ game: { data = null } = {}, dispatch }) => {
  useEffect(() => {
    dispatch({ type: types.NEW_GAME_REQUEST, payload: null })
  }, [dispatch])

  return (
    <div>
      <Header />
      <Main data={data} dispatch={dispatch} />
    </div>
  )
}

export default App
