/**
 * Test case for ponWriter.
 * Runs with mocha.
 */
'use strict'

const PonWriter = require('../lib/pon_writer.js')
const assert = require('assert')
const co = require('co')

describe('pon-writer', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pon writer', () => co(function * () {
    let writer = new PonWriter({})
    yield writer.write(
      `${__dirname}/../tmp/foo/bar.txt`,
      'This is bar!',
      {
        skipIfIdentical: true,
        mkdirp: true
      }
    )
  }))
})

/* global describe, before, after, it */
