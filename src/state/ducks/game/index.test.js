'use strict'

import * as index from './index'

describe('game/index.js', function () {
  it('should export functions', function () {
    expect(Object.keys(index)).toEqual(['default', 'gameOperations'])
  })
})
