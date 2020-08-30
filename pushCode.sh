#!/usr/bin/env sh

set -e

git add -A

git commit -m $1

git push origin master

# ./deployDocs.sh