/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { shallow } from 'enzyme'
import {{ cookiecutter.component_name }} from './{{ cookiecutter.component_name }}'

describe('{{ cookiecutter.component_name }}', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<{{ cookiecutter.component_name }} />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a <div />', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })
})
