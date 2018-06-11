#!/bin/bash

git add src/hash.json -f
git commit -m "deploy"
git push heroku master -f
git reset HEAD~


