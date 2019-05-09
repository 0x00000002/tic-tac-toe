import React from 'react'
import Loading from './Loading'
import { shallow } from 'enzyme'
import Header from './Header'

const props = {
  control: {
    game: {
      data: 'fake-data',
      move: 'fame-moveFn'
    }
  }
}

describe('components/Loading', function () {
  it('should render Loading component', async function () {
    const wrapper = shallow(<Loading />)
    expect(wrapper.text()).toEqual('Loading...')
  })
})
