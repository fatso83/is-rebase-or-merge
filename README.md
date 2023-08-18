> Check if you are in the middle of a rebase or merge

# Usage

[![npm version](https://img.shields.io/npm/v/@fatso83/is-rebase-or-merge)](https://www.npmjs.com/package/@fatso83/is-rebase-or-merge)

Typically in a Husky commit hook:
`"pre-commit": "is-rebase-or-merge || do-something"`

# TODOs
- Add support for checking if we are in the middle of a cherry-picking session
