/*jshint expr: true*/
'use strict';

describe('AngularJsonAPICollection factory', function() {

  beforeEach(module('angularJsonapi'));

  it('returns valid model', inject(function(AngularJsonAPICollection) {
    expect(AngularJsonAPICollection).to.be.ok;
  }));

});
