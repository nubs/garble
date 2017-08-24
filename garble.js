(function() {
  "use strict";

  // Helper function to return an array of all of the characters between two
  // characters inclusive.
  function charRange(low, high) {
    var result = [];
    for (var current = low.charCodeAt(0); current <= high.charCodeAt(0); current++) {
      result.push(String.fromCharCode(current));
    }

    return result;
  }

  // A list of the acceptable diactric characters.  Other UTF-8 Combining
  // Character ranges aren't well supported.
  var diacritics = charRange("\u0300", "\u036f");

  // A helper function that returns a random diactric from the list.
  function randomDiacritic() {
    return diacritics[Math.floor(Math.random() * diacritics.length)];
  }

  // "Garbles" text by adding Unicode Combining Characters (diacritics) to
  // every character.  Defaults to adding 20-30 diacritics to each character.
  var garble = function(str, minDiacritics, maxDiacritics) {
    var garbled = "";

    minDiacritics = typeof minDiacritics === "undefined" ? 20 : minDiacritics;
    maxDiacritics = typeof maxDiacritics === "undefined" ? 30 : maxDiacritics;
    var diactricRange = maxDiacritics - minDiacritics + 1;

    for (var c of str) {
      garbled += c;
      var numDiactritics = Math.floor(Math.random() * diactricRange) + minDiacritics;
      for (var j = 0; j < numDiactritics; j++) {
        garbled += randomDiacritic();
      }
    }

    return garbled;
  };

  // Handle node.js and browser includes.
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = garble;
    }
    exports.garble = garble;
  } else {
    this.garble = garble;
  }

  // Handle AMD autoloaders.
  if (typeof define === "function" && define.amd) {
    define("garble", [], function() {
      return garble;
    });
  }
}.call(this));
