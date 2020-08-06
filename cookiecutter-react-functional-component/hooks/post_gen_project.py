import os
from collections import OrderedDict

from cookiecutter.main import cookiecutter

context = {{ cookiecutter }}

def setup_stylesheets(stylesheet: str, component_name: str):
    # only keep the appropriate stylesheet file
    if stylesheet == 'css':
        os.remove(f"{component_name}.styles.scss")
        os.remove(f"{component_name}.styles.tsx")
    elif stylesheet == "scss":
        os.remove(f"{component_name}.styles.css")
        os.remove(f"{component_name}.styles.tsx")
    elif stylesheet == "styled-components":
        os.remove(f"{component_name}.styles.css")
        os.remove(f"{component_name}.styles.scss")

def setup_testing(testing: str):
    # only keep the test files if requested
    if testing != 'yes':
        os.remove('{{ cookiecutter.component_name }}.spec.tsx')

def setup_storybook(storybook: str):
    if storybook != 'yes':
        os.remove('{{ cookiecutter.component_name }}.stories.tsx')

def rename_file_extensions(old: str, new: str, files):
    # only rename files that have the old extension
    for file in filter(lambda file: file.endswith(old), files):
        # extract filename from the extension
        filename_without_extension = os.path.splitext(file)[0]
        # now rename the file
        os.rename(file, filename_without_extension + '.' + new)

def setup_typescript(use_typescript: str):
    if use_typescript != 'yes':
        # no need for the interfaces file
        os.remove('interfaces.ts')
        # rename all ts files to js
        files = os.listdir('.')
        rename_file_extensions('ts', 'js', files)
        rename_file_extensions('tsx', 'jsx', files)

setup_stylesheets(context['stylesheet'], context['component_name'])
setup_testing(context['testing'])
setup_typescript(context['use_typescript'])
