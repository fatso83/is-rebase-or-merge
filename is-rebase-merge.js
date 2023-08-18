#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const gitRoot = require("./git-root");
const debug = require("debug")("is-rebase-or-merge");

const rebasePath = path.join(gitRoot, "rebase-merge");
const mergePath = path.join(gitRoot, "MERGE_HEAD");
debug("rebasePath", rebasePath);
debug("mergePath", mergePath);

const isInMergeOrRebase = () =>
  fs.existsSync(rebasePath) || fs.existsSync(mergePath);

if (require.main === module) {
  const result = isInMergeOrRebase();
  if (result) {
    console.log(`We are in the middle of a rebase or merge. Skipping`);
  }
  process.exit(result ? 0 : 1);
}

module.exports = isInMergeOrRebase;
