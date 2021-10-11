#! /usr/bin/env sh

echo "Running BUILD Script"

# This script contains changes required for the production environment.
mv /app/svelte.config.js.prod /app/svelte.config.js
