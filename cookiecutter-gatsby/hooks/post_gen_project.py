import os, subprocess, sys

sys.path.insert(0, "{{ cookiecutter.project_root }}")
from common.post_gen_hook import main

# cookiecutter jinja2 obj is extracted as an OrderedDict
from collections import OrderedDict
context = {{ cookiecutter }}
main(context)

# remove tailwind configs if not used
if (context.tailwindcss != 'yes' and os.path.exists('tailwind.config.js')):
    os.remove('tailwind.config.js')
