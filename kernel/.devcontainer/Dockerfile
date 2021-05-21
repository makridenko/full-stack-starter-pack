FROM mcr.microsoft.com/vscode/devcontainers/python:0-3.8

COPY ./requirements.txt /tmp/

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r /tmp/requirements.txt
