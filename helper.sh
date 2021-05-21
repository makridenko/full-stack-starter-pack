#!/bin/bash

if [[ $1 = 'config' ]]; then
    cat ./kernel/.env.example >> ./kernel/.env
    echo "Don't forget to change your SECRET_KEY"
    echo "https://djecrety.ir/ can help you!"
    cat ./kernel/config/local_settings.example >> ./kernel/config/local_settings.py
    exit 1
fi

if [[ $1 = 'gql' ]]; then
    cp ./kernel/schema.json ./client/schema.json
    exit 1
fi