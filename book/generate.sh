#!/usr/bin/env bash
PATH=`npm list -g | head -n 1`
PATH="$PATH/node_modules"
echo "exporting NODE_PATH=$PATH"
export NODE_PATH=$PATH
/opt/homebrew/bin/node generate.js
