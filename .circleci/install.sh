#!/bin/bash
if [ -d node_modules ]
then
    echo "Dependencies already cached"
else
    if [ "$1" == "dev" ]; then
        npm install --only=dev --no-save
    else
        npm install --production --no-save
    fi
fi