import { checkMove, move } from './logic'
import { describe, Try } from 'riteway'

const x = 'x'
const o = 'o'
const winnerX = [x, null, null, null, x, null, null, null, x]
const winnerO = [ null, o, null, null, o, null, null, o, null]
const noWinner = [ null, null, null, null, o, null, null, o, null]

describe('checkMove()', async assert => {
  assert({
    given: 'no state',
    should: 'return false',
    actual: checkMove(),
    expected: false
  })

  assert({
    given: 'wrong state',
    should: 'return false',
    actual: checkMove([0,1,2], x),
    expected: false
  })

  assert({
    given: 'wrong state type',
    should: 'throw TypeError',
    actual: Try(checkMove, null, x),
    expected: new TypeError()
  })

  assert({
    given: 'wrong player type',
    should: 'return false',
    actual: Try(checkMove, [], {}),
    expected: false
  })

  assert({
    given: 'X winner state and no player',
    should: 'return true',
    actual: checkMove(winnerX),
    expected: true
  })

  assert({
    given: 'X winner state and player X',
    should: 'return true',
    actual: checkMove(winnerX, x),
    expected: true
  })

  assert({
    given: 'X winner state and player O',
    should: 'return true',
    actual: checkMove(winnerX, o),
    expected: false
  })

  assert({
    given: 'O winner state and no player',
    should: 'return false',
    actual: checkMove(winnerO),
    expected: false
  })

  assert({
    given: 'O winner state and player O',
    should: 'return false',
    actual: checkMove(winnerO, o),
    expected: true
  })

  assert({
    given: 'O winner state and player X',
    should: 'return false',
    actual: checkMove(winnerO, x),
    expected: false
  })

  assert({
    given: 'NO winner state and player X',
    should: 'return false',
    actual: checkMove(noWinner, x),
    expected: false
  })

  assert({
    given: 'NO winner state and player O',
    should: 'return false',
    actual: checkMove(noWinner, o),
    expected: false
  })
})


describe('move()', async assert => {
  assert({
    given: 'new move',
    should: 'return new state',
    actual: move(noWinner, 'x', 0),
    expected: [ 'x', null, null, null, 'o', null, null, 'o', null ]
  })

  assert({
    given: 'no state',
    should: 'create new state',
    actual: move([], 'x', 0),
    expected: [ 'x' ]
  })

  assert({
    given: 'no player',
    should: 'return new state from player X',
    actual: move(noWinner),
    expected: [ 'x', null, null, null, 'o', null, null, 'o', null ]
  })

  assert({
    given: 'no index',
    should: 'return new state from player X',
    actual: move(noWinner, 'o'),
    expected: [ 'o', null, null, null, 'o', null, null, 'o', null ]
  })

  assert({
    given: 'move to existing index',
    should: 'return old state',
    actual: move(noWinner, 'x', 4),
    expected: [ null, null, null, null, 'o', null, null, 'o', null ]
  })
})