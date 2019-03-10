#!/bin/bash

# git status | lines containing modified | except lines containing sitemap | count lines
if [[ $(git status | grep -P "(?<=modified:)[ ]*[\w.\/]*" | grep -v "sitemap" | wc -l) -ge 1 ]];
then
    echo "I shall proceed"
else
    echo "nothing to push"
fi