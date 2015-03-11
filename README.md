# garble
A fun JavaScript text-garbler using Unicode combining characters (diacritics).

[![Latest Stable Version](http://img.shields.io/npm/v/garble.svg?style=flat)](https://www.npmjs.org/package/garble)
[![Total Downloads](http://img.shields.io/npm/dm/garble.svg?style=flat)](https://www.npmjs.org/package/garble)
[![License](http://img.shields.io/npm/l/garble.svg?style=flat)](https://www.npmjs.org/package/garble)

## Try it Out!
You can try it out in the browser [here](http://nubs.github.io/garble/).

## Usage
This library exports a function (named `garble` for browser users) that garbles
text in a random fashion using Unicode combining characters (diacritics).  For
example:

```js
var garble = require("garble");

console.log(garble("hello, world"));
// h͚̠̙̒e̖͇ͬ̕ļ̹̯ͩl̘ͮ͢͞o̷̪͓ͅ,͚̑̊͢ ̤̫̿͌w̥̦̹͢ö̥͊͜r̜̓̅͘l̓̉̀͝d̫́̉
```

It takes additional parameters to control the minimum and maximum number of
diacritics added to each character (defaults to 20-30):

```js
var garble = require("garble");

console.log(garble("hello, world", 0, 1));
// ḧe̟l͕l̝o, w̅orl̢d̅
```

## Command-Line Usage
Included in the npm package is a CLI executable that garbles the input.  For
example:

```bash
garble
hello world
h̤̊͟͏e̵̖̠̚l̫ͬ͠ͅl͚̓̀ͤo̜̻̔͆ ͓͗͒̕w̧ͩ̂̒ơ̵̙̊r̬ͫ̾̔l̺͔͓ͦd̷̘͈̾
```
