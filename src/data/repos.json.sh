#!/bin/env sh

# This shell script fetches data for a given user and returns an array of repository objects, which can then be used by page loaders to display data about the usr's repositories on the website.
# To run this script, you need to have the GitHub CLI installed and authenticated with your GitHub account.
# You can run this script in the terminal with the following command:
#   node src/components/repos.js > src/data/repos.json
# This will fetch the list of repositories for the user "modster" and save it as a JSON file in the "src/data" directory, which can then be used by the application to display information about the user's repositories on the website.

gh api "users/modster/repos?per_page=10" --jq '[.[] | {name: .name, description: .description, url: .html_url}]' > src/data/repos.json
