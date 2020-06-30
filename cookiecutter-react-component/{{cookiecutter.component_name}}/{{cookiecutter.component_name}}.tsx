import React, { Component } from 'react'
import { {{ cookiecutter.component_name }}Props, {{ cookiecutter.component_name }}State } from './interfaces'
import './{{ cookiecutter.component_name }}.{{ cookiecutter.stylesheet }}'

class {{ cookiecutter.component_name }} extends Component<{{ cookiecutter.component_name }}Props, {{ cookiecutter.component_name }}State> {
  constructor(props: {{ cookiecutter.component_name }}Props) {
    super(props)

    this.state = {}
  }

  render = () => (
    <div className='{{ cookiecutter.component_name_lower }}-container' />
  )
}

export default {{ cookiecutter.component_name }}
