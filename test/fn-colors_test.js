var fnColors = require('../lib/fn-colors.js'),
    assert = require('assert');

describe('A normal function', function () {
  before(function () {
    // Create a function which saves arguments to this
    var that = this;
    this.fn = function saveArguments () {
      that.args = arguments;
    };
  });

  it('has colors methods', function () {
    assert(this.fn.red);
  });

  it('receives ANSI escaped strings', function () {
    this.fn.green('Hello World!');
    console.log('TODO: Assert', this.args);
  });
});

describe('A pre-existing function', function () {
  it('has colors methods as well', function () {
    assert(console.log.blue);
  });
});

// TODO: This requires further proxying on colors =/
xdescribe('fn-colors', function () {
  it('exports colors for custom manipulations', function () {
    var colors = require('colors');
    assert.strictEqual(fnColors, colors);
  });
});