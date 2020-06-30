import React from 'react'
import { action } from '@storybook/addon-actions'

import {{ cookiecutter.component_name }} from './{{ cookiecutter.component_name }}'
import { {{ cookiecutter.component_name }}Props } from './interfaces'

export default {
  component: {{cookiecutter.component_name}},
  title: '{{ cookiecutter.component_name }}',
  includeStories: /.*Story$/,
}

export const {{ cookiecutter.component_name }}DefaultProps: {{ cookiecutter.component_name }}Props = {}

export const DefaultStory = () => <{{ cookiecutter.component_name }} {...{{ cookiecutter.component_name }}DefaultProps } />
