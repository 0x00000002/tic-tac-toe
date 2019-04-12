import React from 'react'
import Header from './Header'
import { shallow } from 'enzyme'

describe('components/Header', function () {
  it('should ...', async function () {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').exists()).toEqual(true)
  })
})
