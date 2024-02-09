#!/bin/bash

#
#  This script will build the web client.  You need to do this before running anything.
#


pushd client
npm install
quasar build
popd
