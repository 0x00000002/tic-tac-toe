import * as R from 'ramda'
import produce from 'immer/dist/immer'

const winPatterns = [
  // rows
  [true, true, true, false, false, false, false, false, false],
  [false, false, false, true, true, true, false, false, false],
  [false, false, false, false, false, false, true, true, true],
  // cols
  [true, false, false, true, false, false, true, false, false],
  [false, true, false, false, true, false, false, true, false],
  [false, false, true, false, false, true, false, false, true],
  // diagonals
  [true, false, false, false, true, false, false, false, true],
  [false, false, true, false, true, false, true, false, false]
]

const checkMove = (state = [], player = 'x') => {
  // convert current player's state to an array similar to the `winPatterns`
  const booleanState = state.map(i => i === player)
  // use Array.prototype.some() to avoid checking all patterns
  return winPatterns.some(pattern => R.equals(pattern, booleanState))
}

const move = (state = [], player = 'x', idx = 0) => {
  return produce(state, draftState => { draftState[idx] = state[idx] || player })
}

export { checkMove, move }
