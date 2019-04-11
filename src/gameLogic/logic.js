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

const move = (state = [], player = 'x', idx = 4) => {
  return produce(state, draftState => { draftState.state[idx] = state[idx] || player })
}

const isAvailable = i => i !== null && i !== false
const mapIndexed = R.addIndex(R.map)
const withIndices = (val, idx) => !val && idx
const getIndicesOfFreeCells = R.compose(R.filter(isAvailable), mapIndexed(withIndices))
const rnd = end => parseInt(Math.random() * end) % end

const aiMove = (data) => {
  const freeCells = getIndicesOfFreeCells(data.state)
  const randomMove = rnd(freeCells.length) // quick solution :-)
  return move(data, 'o', freeCells[randomMove])
}

export { checkMove, move, aiMove }
