'use strict'

import * as types from './types'

describe('user.types', function () {
  it('should export types', function () {
    expect(types).toEqual({
      NEW: 'NEW',
      NEW_COMPLETED: 'NEW_COMPLETED',
      NEW_FAILED: 'NEW_FAILED'
    })
  })
})
