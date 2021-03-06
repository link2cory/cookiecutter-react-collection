import os, subprocess

# cookiecutter jinja2 obj is extracted as an OrderedDict
from collections import OrderedDict
from cookiecutter.main import cookiecutter
from github import Github
from git import Repo

def setup_git(context): 
    project_slug = context['project_slug']
    use_github = context['use_github']
    continuous_integration = context['continuous_integration']
    use_gitflow = context['use_gitflow']
    github_token = context['github_token']
    github_user = context['github_user']
    ci_template = context['ci_template']
    ci_test_name = context['ci_test_name']
    # activate .gitignore. It must be stored this way to facilitate versioning of
    # the cookiecutter.
    os.rename('gitignore', '.gitignore')

    # initialize local repo
    print('initializing local repository...')
    local = Repo.init(os.getcwd())
    local.git.add(A=True)
    local.index.commit('Initial Commit, project generated with cookiecutter-jam-app')
    print('done initializing local repository')


    if use_github == 'yes':
        print('setting up github repository...')
        remote = setup_remote(github_token, project_slug)
        add_remote(local, github_user, project_slug)
        print('done setting up github repository')
        
        if continuous_integration != 'no':
            print('setting up continuous integration...')
            setup_continuous_integration(local, remote, ci_template, ci_test_name)
            print('done setting up continuous integration...')

        if use_gitflow == 'yes':
            print('setting up gitflow...')
            setup_gitflow(remote)
            print('done setting up gitflow...')



def setup_remote(github_token, project_slug):
    # create the github repo
    return Github(github_token).get_user().create_repo(project_slug)

def setup_gitflow(remote):
    # create the develop branch
    develop_branch = remote.create_git_ref(
        ref='refs/heads/develop',
        sha=remote.get_branch('master').commit.sha
    )

    # develop will be the default branch
    remote.edit(default_branch='develop')


def setup_continuous_integration(local, remote, ci_template, ci_test_name):
    ci_context = {"test_name": ci_test_name}

    # add the CI files from the template
    success = cookiecutter(
        ci_template,
        extra_context=ci_context,
        no_input=True
    )

    # commit the CI files
    local.git.add(A=True)
    local.index.commit('Added Continuous Integration Support')

    # the default branch should be protected against pull requests that fail CI tests
    remote.get_branch(remote.default_branch).edit_protection(
            strict=True,
            contexts=[ci_test_name]
        )

def add_remote(local, github_user, project_slug):
    # point local repo to the remote
    remote_repo = local.create_remote(
        'origin',
        f'git@github.com:{github_user}/{project_slug}.git'
    )

    #  push to the remote
    remote_repo.push(refspec='{}:{}'.format('master', 'master'))

def remove_extra_files():
    # Remove github actions files unless they are necessary
    if context['use_github'] == 'no' or context['continuous_integration'] != 'github_actions':
        # remove the github directory
        os.rmtree('.github/')

def remove_project_config_files():
    config_files = [
        '.eslintrc.js',
        'jest.config.js',
        '.prettierrc.js',
        '.prettierignore',
        'LICENSE',
        'gitignore',
    ]

    for config_file in config_files:
        if os.path.exists(config_file):
          os.remove(config_file)

def main(context):
    # run cookiecutter for each sub-package
    print('rendering subpackages...')
    for name, package in context['packages'].items():
        print(f'rendering package: {name}')
        # make sure that the dependencies for this package don't get installed yet
        package_context = package['context']
        package_context['is_subpackage'] = True

        success = cookiecutter(
            package['template'],
            output_dir='packages',
            extra_context=package_context,
            no_input=True
        )
        print(f'finished rendering package: {name}')

    print('finished rendering subpackages')

    if context['is_subpackage'] == 'no':
      if context['install_dependencies'] == 'yes':
          print('installing dependencies...')
          subprocess.run(['yarn', 'install'])
          print('finished installing dependencies')

      if context['use_git'] == 'yes':
          print('setting up git...')
          setup_git(context)
          print('finished setting up git...')
    else:
        remove_project_config_files()

