import React from 'react'
import { shallow } from 'enzyme'
import TicTacToe from './TicTacToe'
import Loading from './Loading'

const props = {
  data: {
    state: [null, 'x', null],
    winner: null
  },
  dispatch: jest.fn()
}

describe('components/TicTacToe', function () {
  it('should render Loading component when empty props', async function () {
    const wrapper = shallow(<TicTacToe />)
    expect(wrapper.find(Loading).exists()).toEqual(true)
  })

  it('should render component', async function () {
    const wrapper = shallow(<TicTacToe {...props} />)
    expect(wrapper.find('section').exists()).toEqual(true)
    expect(wrapper.find('li').exists()).toEqual(true)
  })

  it('should click', async function () {
    const wrapper = shallow(<TicTacToe {...props} />)
    wrapper.find('li').at(0).simulate('click')
    expect(props.dispatch.mock.calls.length).toEqual(1)
  })
})
