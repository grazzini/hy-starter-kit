#!/usr/bin/env sh

message=$1; shift
if [[ -z "$message" ]]; then
  message=deploy
fi

# abort on errors
set -e

# build
npm run build

git add -A
git commit -m "$message"

git push 
git push heroku master

# npm run algolia
