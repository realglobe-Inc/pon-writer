/**
 * Create a PonWriter instance
 * @function create
 * @param {...*} args
 * @returns {PonWriter}
 */
'use strict'

const PonWriter = require('./pon_writer')

/** @lends create */
function create (...args) {
  return new PonWriter(...args)
}

module.exports = create
