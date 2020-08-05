import React from 'react'
import { {{ cookiecutter.component_name }}Props } from './interfaces'
{% if cookiecutter.stylesheet == 'css' or cookiecutter.stylesheet == 'scss' %}
  import './{{cookiecutter.component_name}}.{{ cookiecutter.stylesheet }}'
{% elif cookiecutter.stylesheet == 'styled-components' %}
  import Styled{{ cookiecutter.component_name }} from './{{cookiecutter.component_name}}.styles'
{% endif %}

const {{ cookiecutter.component_name }}: React.FC<{{cookiecutter.component_name}}Props> = ({}: {{ cookiecutter.component_name }}Props) => (
  {% if cookiecutter.stylesheet == 'css' or cookiecutter.stylesheet == 'scss' %}
    <div className='{{ cookiecutter.component_name_lower }}-container' />
  {% elif cookiecutter.stylesheet == 'styled-components' %}
    <Styled{{ cookiecutter.component_name }} />
  {% endif %}
)

export default {{ cookiecutter.component_name }}
