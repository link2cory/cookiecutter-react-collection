import os

from secrets import token_urlsafe

from cookiecutter.main import cookiecutter

cookiecutter(
    os.getcwd(),
    extra_context={
        'jwt_secret': token_urlsafe(64)
    }
)
