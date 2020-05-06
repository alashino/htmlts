#!/usr/bin/env bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)

pushd $SCRIPT_DIR > /dev/null

    npm run build_htmlts_product
    npm run build_bootstrap4_product

popd > /dev/null