'use strict';

var assert = require('assert');

var transform = require('../');

var res = transform.render('n = 42\nconsole.log n');

var passed = false;
Function('console', res)({
  log: function (value) {
    assert(!passed, 'only logs once');
    assert(value === 42, 'should log 42');
    passed = true;
  }
});
assert(passed, 'should log');
console.log('test passed');
