var uniqueRandomArray = require("unique-random-array");
var cricketStarNames = require("./cricketstar-names.json");
module.exports = {
  all: cricketStarNames,
  random: uniqueRandomArray(cricketStarNames),
};
