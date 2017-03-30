/**
 * File writer for pon
 * @module pon-writer
 */

'use strict'

const create = require('./create')
const PonWriter = require('./pon_writer')

let lib = create.bind(this)

Object.assign(lib, PonWriter, {
  create,
  PonWriter
})

module.exports = lib
