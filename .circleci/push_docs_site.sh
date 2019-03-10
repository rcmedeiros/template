#!/bin/bash

status=$(git status | grep "docs/")
echo "status"
echo "${status}"

changes=$( echo "${status}" | grep -v "sitemap" | wc -l);

if [[ changes -ge 1 ]];
then
    echo "${changes} changes to push"
    git add --all docs/
    git config --global user.email "circleci@rafaelmedeiros.eti.br"
    git config --global user.name "CircleCI"
    git commit -m "Automated docs site generation build ${CIRCLE_BUILD_NUM}"
    git push
else
    echo "No changes to push"
fi