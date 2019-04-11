import React from 'react'
import App from './App'
import Header from './Header'
import Main from './Main'
import { shallow } from 'enzyme'

const props = {
  data: {
    state: {},
    winner: null
  }
}

describe('components/App', function () {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App {...props} />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should ...', async function () {
    expect(wrapper.find(Header).exists()).toEqual(true)
    expect(wrapper.find(Main).exists()).toEqual(true)
  })
})
