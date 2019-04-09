'use strict'

import * as operations from './operations'

describe('Game operations', function () {
  it('should export functions', function () {
    expect(Object.keys(operations)).toEqual([
      'move', 'loadGame'
    ])
  })
})
