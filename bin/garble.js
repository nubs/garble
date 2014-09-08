#!/usr/bin/env node
"use strict";
var garble = require("../garble");

process.stdin.on("readable", function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(garble(String(chunk)));
  }
});
