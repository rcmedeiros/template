#!/bin/bash

status=$(git status | grep -P "(?<=modified:)[ ]*[docs\/][\w.\/]*")
echo "status\n${status}"
# git status | lines containing modified | except lines containing sitemap | count lines
changes=$( ${status} | grep -v "sitemap" | wc -l);
echo "${changes} changes"

if [[ changes -ge 1 ]];
then
    echo "I shall proceed"
else
    echo "nothing to push"
fi