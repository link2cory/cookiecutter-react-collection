import os, subprocess, sys

sys.path.insert(0, "{{ cookiecutter.project_root }}")
from common.post_gen_hook import main

# cookiecutter jinja2 obj is extracted as an OrderedDict
from collections import OrderedDict

main({{ cookiecutter }})
