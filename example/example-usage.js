'use strict'

const ponWriter = require('pon-writer')

async function tryExample () {
  let writer = ponWriter({})

  let { skipped } = await writer.write('foo/bar.txt', 'This is the contents of bar!', {
    mkdirp: true,
    skipIfIdentical: true
  })
  if (!skipped) {
    console.log('New file generated!')
  }
}

tryExample().catch((err) => console.error(err))
