import React from 'react'
import { shallow } from 'enzyme'
import Result from './Result'

const empty = { winner: null }
const xWinner = { winner: 'x' }
const oWinner = { winner: 'o' }

describe('components/Result', function () {
  it('should display nothing when there is no data', async function () {
    const wrapper = shallow(<Result {...empty} />)
    expect(wrapper.find('h2').exists()).toEqual(false)
  })

  it('should display "You win!" when winner is X', async function () {
    const wrapper = shallow(<Result {...xWinner} />)
    expect(wrapper.find('h2').text()).toEqual('You win!')
  })

  it('should display "Computer win!" when winner is O', async function () {
    const wrapper = shallow(<Result {...oWinner} />)
    expect(wrapper.find('h2').text()).toEqual('Computer win!')
  })
})
