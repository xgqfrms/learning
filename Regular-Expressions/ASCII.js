"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-07-18
 * @modified
 *
 * @description Regular Expressions Cheatsheet
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
 * @solutions
 *
 */

const log = console.log;

// a~z
const reg = /[a-z]/;

reg.test(`a`);
// true
reg.test(`z`);
// true

reg.test(`A`);
// false
reg.test(`Z`);
// false
