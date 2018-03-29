'use strict';

const rateMap = require('rate-map');

const contents = ['⠀', '⣀', '⣤', '⣶', '⣿'];
const MAX = contents.length - 1;

module.exports = function verticalMeter(val) {
	return contents[Math.round(rateMap(val, 0, MAX))];
};
