import produce from 'immer/dist/immer'
import {
  addIndex,
  filter,
  compose,
  map,
  equals
} from 'ramda'

const winPatterns = [
  // rows
  [1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1],

  // cols
  [1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 1],
  // diagonals
  [1, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 1, 0, 0]
]

const checkMove = (state = [], player = 'x') => {
  // convert current player's state to an array similar to the `winPatterns`
  const binaryState = state.map(i => i === player ? 1 : 0)
  return winPatterns.some(pattern => {
    const application = pattern.map((val, idx) => val & binaryState[idx])
    return equals(pattern, application)
  })
}

const playerMove = (idx = 4, player = 'x', state = []) =>
  produce(state, draftState => {
    draftState[idx] = state[idx] || player
  })

const isAvailable = i => i !== null && i !== false
const mapIndexed = addIndex(map)
const withIndices = (val, idx) => !val && idx
const getIndicesOfFreeCells = compose(filter(isAvailable), mapIndexed(withIndices))
const rnd = end => parseInt(Math.random() * end) % end

const aiMove = (state) => {
  const freeCells = getIndicesOfFreeCells(state)
  const randomMove = rnd(freeCells.length) // quick solution :-)
  return playerMove(freeCells[randomMove], 'o', state)
}

export { checkMove, playerMove, aiMove }
