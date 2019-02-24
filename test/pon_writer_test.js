/**
 * Test case for ponWriter.
 * Runs with mocha.
 */
'use strict'

const PonWriter = require('../lib/pon_writer.js')
const assert = require('assert')

describe('pon-writer', function () {
  this.timeout(3000)

  it('Pon writer', async () => {
    let writer = new PonWriter({})
    await writer.write(
      `${__dirname}/../tmp/foo/bar.txt`,
      'This is bar!',
      {
        skipIfIdentical: true,
        mkdirp: true
      }
    )
  })
})

/* global describe, before, after, it */
