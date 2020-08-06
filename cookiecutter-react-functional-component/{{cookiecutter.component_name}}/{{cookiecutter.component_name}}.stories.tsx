import React from 'react'
import { action } from '@storybook/addon-actions'

import {{ cookiecutter.component_name }} from './{{ cookiecutter.component_name }}'
{% if cookiecutter.use_typescript == 'yes' %}
import { {{ cookiecutter.component_name }}Props } from './interfaces'
{% endif %}

export default {
  component: {{cookiecutter.component_name}},
  title: '{{ cookiecutter.component_name }}',
  includeStories: /.*Story$/,
}

export const {{cookiecutter.component_name}}DefaultProps{% if cookiecutter.use_typescript == 'yes' %}: {{cookiecutter.component_name}}Props{% endif %} = {}

export const DefaultStory = () => <{{ cookiecutter.component_name }} {...{{ cookiecutter.component_name }}DefaultProps } />
