import React from 'react'
import Main from './Main'
import Loading from './Loading'
import TicTacToe from './TicTacToe'
import { shallow } from 'enzyme'
import Result from './Result'

const props = {
  control: {
    game: {
      data: {
        state: 'fakeState',
        winner: 'fakeWinner'
      }
    },
    dispatch: jest.fn()
  }
}

const empty = {
  control: {
    game: {
      data: null
    },
    dispatch: null
  }
}

const noWinner = {
  control: {
    game: {
      data: {
        state: 'fakeState',
        winner: null
      }
    },
    dispatch: jest.fn()
  }
}

describe('components/Main', function () {
  it('should display "Loading..." when there is no data', async function () {
    const wrapper = shallow(<Main {...empty} />)
    expect(wrapper.find(Loading).exists()).toEqual(true)
  })

  it('should load component properly', async function () {
    const wrapper = shallow(<Main {...props} />)
    expect(wrapper.find(TicTacToe).exists()).toEqual(true)
    expect(wrapper.find('button').text()).toEqual('Restart')
    expect(wrapper.find(Result).exists()).toEqual(true)
    expect(wrapper.find(Result).prop('winner')).toEqual('fakeWinner')
  })

  it('should provide proper props', async function () {
    const wrapper = shallow(<Main {...noWinner } />)
    expect(wrapper.find(TicTacToe).prop('move')).toEqual(props.control.move)
  })

  it('should replace "Move()" functions with "NewGame()"', async function () {
    const wrapper = shallow(<Main {...props} />)
    expect(wrapper.find(Result).prop('winner')).toEqual(props.control.game.data.winner)
    expect(wrapper.find(TicTacToe).prop('move')).toEqual(props.control.newGame)
  })

  it('should click', async function () {
    const wrapper = shallow(<Main {...noWinner} />)
    wrapper.find('button').simulate('click')
    expect(noWinner.control.dispatch.mock.calls.length).toEqual(1)
  })
})
