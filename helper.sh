#!/bin/bash

PROJECT=${PWD##*/}

if [[ $1 = 'config' ]]; then
    cat ./kernel/.env.example >> ./kernel/.env
    echo "Don't forget to change your SECRET_KEY"
    echo "https://djecrety.ir/ can help you!"
    cat ./kernel/config/local_settings.example >> ./kernel/config/local_settings.py
    exit 1
fi

if [[ $1 = 'gql' ]]; then

    if [[ $2 = '-d' ]]; then
        docker-compose up -d --build web
        docker exec ${PROJECT}_web_1 ./manage.sh gql
        docker-compose down
    fi

    cp ./kernel/schema.json ./client/schema.json
    exit 1
fi

if [[ $1 = 'build' ]]; then
    docker-compose up -d --build webclient
    docker exec ${PROJECT}_webclient_1 yarn install
    docker exec ${PROJECT}_webclient_1 yarn relay
    docker exec ${PROJECT}_webclient_1 yarn build
    docker-compose down

    rm -f client/schema.json
    rm -rf kernel/webclient
    cp -r client/build kernel/webclient
    rm -rf client/build

    exit 1
fi
