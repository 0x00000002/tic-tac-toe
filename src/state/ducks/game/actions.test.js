'use strict'
import * as actions from './actions'
import * as types from './types'

const emptyPayload = {}

describe('cart actions', function () {
  it('should export functions', function () {
    expect(Object.keys(actions)).toEqual([
      'newOp'
    ])
  })

  describe('clearCart', function () {
    it('should return an NEW_COMPLETE action', function () {
      expect(actions.newOp()).toEqual({
        type: types.MOVE_COMPLETED,
        payload: emptyPayload
      })
    })
  })
})
