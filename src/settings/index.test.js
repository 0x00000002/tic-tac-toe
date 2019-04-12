import { get } from './index'

const OLD_ENV = process.env

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV }
  delete process.env.NODE_ENV
})

afterEach(() => {
  process.env = OLD_ENV
})

console.log(process.env.NODE_ENV)

describe('settings/index', function () {
  it('development env', async function () {
    process.env.NODE_ENV = 'development'
    expect(get()).toEqual({ "siteName": "Tic Tac Toe (development)" })
  })

  it('staging env', async function () {
    process.env.NODE_ENV = 'production'
    process.env.REACT_APP_TARGET = 'staging'
    expect(get()).toEqual({ "siteName": "Tic Tac Toe (staging)" })
  })

  it('staging env', async function () {
    process.env.NODE_ENV = 'production'
    expect(get()).toEqual({ "siteName": "Tic Tac Toe" })
  })

  it('no env', async function () {
    process.env.NODE_ENV = ''
    expect(get()).toEqual({"siteName": "Tic Tac Toe"})
  })
})
