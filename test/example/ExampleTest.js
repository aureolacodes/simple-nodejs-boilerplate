/**
 * Holds an example test case.
 *
 * @author Christian Hanne <support@aureola.codes>
 * @license MIT
 */
'use strict';

let chai = require('chai');
let should = chai.should();
let expect = chai.expect;

import Example from '../../src/example/Example.js';

describe('ExampleTest', () => {
  describe('#constructor', () => {
    let shipping = new Example();

    it('adds config on initialisation', () => {
      expect(shipping.config).not.to.be.null;
    });
  });
});
