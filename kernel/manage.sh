#!/bin/bash


if [[ $1 = 'app' ]]; then
    ./dmanage.py startapp --template app_template $2
    exit 1
fi

if [[ $1 = 'run' ]]; then
    ./dmanage.py runserver 0.0.0.0:8000
    exit 1
fi

if [[ $1 = 'migrate' ]]; then
    ./dmanage.py makemigrations
    ./dmanage.py migrate
    exit 1
fi

if [[ $1 = 'gql' ]]; then
    ./dmanage.py graphql_schema --indent 2
    exit 1
fi

if [[ $1 = 'su' ]]; then
    ./dmanage.py createsuperuser
    exit 1
fi

./dmanage.py $@
