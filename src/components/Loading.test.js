import React from 'react'
import Loading from './Loading'
import { shallow } from 'enzyme'

describe('components/Loading', function () {
  it('should render Loading component', async function () {
    const wrapper = shallow(<Loading />)
    expect(wrapper.text()).toEqual('Loading...')
  })
})
