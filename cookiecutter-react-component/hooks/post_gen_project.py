import os

from cookiecutter.main import cookiecutter

context = {{ cookiecutter }}

def setup_stylesheets(stylesheet: str):
    # only keep the appropriate stylesheet file
    if stylesheet == 'css':
        os.remove('{{ cookiecutter.component_name }}.scss')
    else:
        os.remove('{{ cookiecutter.component_name }}.css')

def setup_testing(testing: str):
    if (testing == 'no'):
        os.remove('{{ cookiecutter.component_name }}.spec.tsx')

setup_stylesheets(context['stylesheet'])
setup_testing(context['testing'])
