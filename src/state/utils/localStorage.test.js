

import * as LS from './localStorage'
import emptyState from '../emptyState'

class LocalStorageMock {
  constructor () {
    this.store = {}
  }

  clear () {
    this.store = {}
  }

  getItem (key) {
    return this.store[key] || null
  }

  setItem (key, value) {
    this.store[key] = value.toString()
  }

  removeItem (key) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock()

describe('Local storage functions', function () {
  it('should load state (empty)', () => {
    const loadingSpy = jest.spyOn(LS, 'loadState')
    localStorage.setItem('gameState', '')
    const loaded = LS.loadState()
    expect(loadingSpy).toHaveBeenCalledTimes(1)
    expect(loaded).toEqual(emptyState)
  })

  it('should load state (non empty)', () => {
    const loadingSpy = jest.spyOn(LS, 'loadState')
    localStorage.setItem('gameState', '12345')
    const loaded = LS.loadState()
    expect(loadingSpy).toHaveBeenCalledTimes(2)
    expect(loaded).toEqual(12345)
  })

  it('should save state (empty)', () => {
    const savingSpy = jest.spyOn(LS, 'saveState')
    localStorage.setItem('gameState', 'asdf')
    LS.saveState('fake-save')
    expect(savingSpy).toHaveBeenCalledTimes(1)
    expect(savingSpy.mock.calls[0][0]).toEqual('fake-save')
  })

  it('should clear state (empty)', () => {
    const cleaningSpy = jest.spyOn(LS, 'clearState')
    LS.clearState()
    expect(cleaningSpy).toHaveBeenCalledTimes(1)
    const loaded = LS.loadState('fake-save')
    expect(loaded).toEqual(emptyState)
  })

})
