/**
 * Contains an example class, just to show how components could be defined.
 *
 * @author Christian Hanne <support@aureola.codes>
 * @license MIT
 */
'use strict';

let config = require('../config/example.json');

export default class Example {
  constructor() {
    this.config = config;
  }
}
