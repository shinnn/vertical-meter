'use strict';

const rateMap = require('rate-map');

const contents = ['⠀', '⣀', '⣤', '⣶', '⣿'];
const MAX = contents.length - 1;

module.exports = function verticalMeter(...args) {
	const argLen = args.length;

	if (argLen === 0) {
		const error = new RangeError('Expected 1 argument (<number>), but got no arguments.');

		error.code = 'ERR_MISSING_ARGS';
		throw error;
	}

	if (argLen !== 1) {
		const error = new RangeError(`Expected 1 argument (<number>), but got ${argLen} arguments.`);

		error.code = 'ERR_TOO_MANY_ARGS';
		throw error;
	}

	return contents[Math.round(rateMap(args[0], 0, MAX))];
};
