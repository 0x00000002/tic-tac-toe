import React from 'react'
import Main from './Main'
import { shallow } from 'enzyme'

const props = {}

describe('components/Header', function () {
  it('should load List component', async function () {
    const wrapper = shallow(<Main {...props} />)
  })
})
