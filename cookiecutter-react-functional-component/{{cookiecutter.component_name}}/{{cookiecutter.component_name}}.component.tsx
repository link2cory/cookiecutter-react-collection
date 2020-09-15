import React from 'react'
{% if cookiecutter.use_typescript == 'yes' %}
import { {{ cookiecutter.component_name }}Props } from './interfaces'
{% endif %}
{% if cookiecutter.stylesheet == 'css' or cookiecutter.stylesheet == 'scss' %}
  import './{{cookiecutter.component_name}}.styles.{{ cookiecutter.stylesheet }}'
{% elif cookiecutter.stylesheet == 'styled-components' %}
  import Styled{{ cookiecutter.component_name }} from './{{cookiecutter.component_name}}.styles'
{% endif %}

const {{cookiecutter.component_name}}{% if cookiecutter.use_typescript == 'yes' %}: React.FC <{{cookiecutter.component_name}}Props>{% endif %} = ({}{% if cookiecutter.use_typescript == 'yes' %}: {{cookiecutter.component_name}} Props{% endif %}) => (
  {% if cookiecutter.stylesheet == 'css' or cookiecutter.stylesheet == 'scss' %}
    <div className='{{ cookiecutter.component_name_lower }}-container' />
  {% elif cookiecutter.stylesheet == 'styled-components' %}
    <Styled{{ cookiecutter.component_name }} />
  {% endif %}
)

export default {{ cookiecutter.component_name }}
