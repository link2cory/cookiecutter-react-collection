import os
from collections import OrderedDict

from cookiecutter.main import cookiecutter

context = {{ cookiecutter }}

def setup_stylesheets(stylesheet: str, component_name: str):
    # only keep the appropriate stylesheet file
    if stylesheet == 'css':
        os.remove(f"{component_name}.scss")
        os.remove(f"{component_name}.styles.tsx")
    elif stylesheet == "scss":
        os.remove(f"{component_name}.css")
        os.remove(f"{component_name}.styles.tsx")
    elif stylesheet == "styled-components":
        os.remove(f"{component_name}.css")
        os.remove(f"{component_name}.scss")

def setup_testing(testing: str):
    # only keep the test files if requested
    if testing != 'yes':
        os.remove('{{ cookiecutter.component_name }}.spec.tsx')

def setup_storybook(storybook: str):
    if storybook != 'yes':
        os.remove('{{ cookiecutter.component_name }}.stories.tsx')

setup_stylesheets(context['stylesheet'], context['component_name'])
setup_testing(context['testing'])
