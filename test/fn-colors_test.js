require('../lib/fn-colors.js');

describe('A normal function', function () {
  before(function () {
    // Create a function which saves arguments to this
    var that = this;
    this.fn = function saveArguments () {
      that.args = arguments;
    };
  });

  it('has colors methods', function () {
    assert(console.log.red);
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