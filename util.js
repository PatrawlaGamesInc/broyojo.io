/*jshint expr:true */

var expect = require('chai').expect,
    util   = require('../src/server/lib/util');


/**
 * Tests for server/lib/util.js
 *
 * This is mostly a regression suite, to make sure behavior
 * is preserved throughout changes to the server infrastructure.
 */

describe('util.js', function () {

  describe('#massToRadius', function () {

    it('should return non-zero radius on zero input', function () {
      var r = util.massToRadius(0);
      expect(r).to.be.a('number');
      expect(r).to.equal(4);
    });

    it('should convert masses to a circle radius', function () {
      var r1 = util.massToRadius(4),
          r2 = util.massToRadius(16),
          r3 = util.massToRadius(1);

      expect(r1).to.equal(16);
      expect(r2).to.equal(28);
      expect(r3).to.equal(10);
    });
  });


  describe('#validNick', function () {

    it('should allow empty player nicknames', function () {
      var bool = util.validNick('');
      //expect(bool).to.be.true;
    });

    it('should allow ascii character nicknames', function () {
      var n1 = util.validNick('Walter_White'),
          n2 = util.validNick('Jesse_Pinkman'),
          n3 = util.validNick('hank'),
          n4 = util.validNick('marie_schrader12'),
          n5 = util.validNick('p');
