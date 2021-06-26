#!/bin/bash

# Declare script colors.
COLOR_RED='\033[0;31m'
COLOR_YELLOW='\033[0;33m'
COLOR_DEFAULT='\033[0m'

# Declare file names.
ENVIRONMENT_VARIABLES_FILE=".env.npm"
PUBLISH_DEBUG_FILE="publish-debug.log"

function validateIfEnvironmentVariableIsNotEmpty() {
  if [ -z "${1}" ]; then
    echo "${COLOR_RED}[ERROR]${COLOR_DEFAULT} Variable ${COLOR_YELLOW}${2}${COLOR_DEFAULT} is missing in ${COLOR_YELLOW}${ENVIRONMENT_VARIABLES_FILE}${COLOR_DEFAULT} file!"
    exit 1
  fi
}

function validateIfFileExists() {
  if [ ! -f "$1" ]; then
    echo "${COLOR_RED}[ERROR]${COLOR_DEFAULT} The file ${COLOR_YELLOW}${1}${COLOR_DEFAULT} does not exist!"
    exit 1
  fi
}

validateIfFileExists ${ENVIRONMENT_VARIABLES_FILE}

# Get environment variables
NPM_USER=$(grep "NPM_USER" .env.npm | sed "s/NPM_USER=//g")
NPM_PASS=$(grep "NPM_PASS" .env.npm | sed "s/NPM_PASS=//g")
NPM_EMAIL=$(grep "NPM_EMAIL" .env.npm | sed "s/NPM_EMAIL=//g")

validateIfEnvironmentVariableIsNotEmpty "${NPM_USER}" "NPM_USER"
validateIfEnvironmentVariableIsNotEmpty "${NPM_PASS}" "NPM_PASS"
validateIfEnvironmentVariableIsNotEmpty "${NPM_EMAIL}" "NPM_EMAIL"

# Login to NPM
npm-cli-login -u ${NPM_USER} -p ${NPM_PASS} -e ${NPM_EMAIL} &>${PUBLISH_DEBUG_FILE}

if [ $? -eq 1 ]; then
  echo "${COLOR_RED}[ERROR]${COLOR_DEFAULT} The ${COLOR_YELLOW}npm-cli-command${COLOR_DEFAULT} failed. Check the ${COLOR_YELLOW}${ERROR_LOGS_OUTPUT}${COLOR_DEFAULT} file to see more details."
  exit 1
fi

# Sign new package versions
lerna version minor --yes

# Publish to NPM
lerna publish from-package --yes
