#!/bin/bash

source ./initDefaultValues.sh

echo ""
echo "Launching the \"${USERSTORY}\" userstory";
echo ""

npm run init-mocha-opts -- --spec dist/tests/plugins/${TS_SELENIUM_EDITOR}/${USERSTORY}.spec.js
