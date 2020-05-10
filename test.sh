#!/usr/bin/env bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)

pushd $SCRIPT_DIR > /dev/null

    npm run test

popd > /dev/null