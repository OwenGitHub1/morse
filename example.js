/**
 * Created with JetBrains WebStorm 8.
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */

var morse = require('../morse.min.js');

var test = function () {
	console.log(morse.encode("Hello"));
	console.log(morse.decode(".... . .-.. .-.. ---"));
};

test();