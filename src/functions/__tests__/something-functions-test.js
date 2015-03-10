var Immutable = require('immutable');
var expect = require('expect');

var SomethingFunctions = require('../something-functions');

describe('SomethingFunctions', function () {
  it('exists and is an object', function () {
    expect(SomethingFunctions).toExist();
    expect(typeof SomethingFunctions).toBe('object');
  });

  describe('something', function () {
    it('adds one correctly', function () {
      var myAppState = Immutable.Map({
        something: 0
      });
      var newAppState = SomethingFunctions.something(myAppState);

      expect(newAppState.get('something')).toBe(1);
    });
  });
});
