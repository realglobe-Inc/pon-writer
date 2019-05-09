/**
 * Writer for pon
 * @class PonWriter
 */
'use strict'

const writeout = require('writeout')
const path = require('path')

/** @lends PonWriter */
class PonWriter {
  /**
   * Write into file
   * @param {string} filename - Filename to write
   * @param {string|Buffer|ReadableStream} content - Content to write
   * @param {Object} [options={}] - Optional settings
   * @param {boolean} [options.mkdirp=false] - Make parent directory
   * @param {boolean} [options.skipIfIdentical=false] - Skip to write if identical
   * @param {string} [options.cwd=process.cwd()] - Current working directory
   * @returns {Promise.<WriteResult>} - Result of writing
   */
  async write (filename, content, options = {}) {
    let {
      mkdirp = false,
      skipIfIdentical = false,
      cwd = process.cwd(),
      mode
    } = options
    let resolved = path.resolve(cwd, filename)
    let { skipped } = await writeout(resolved, content, {
      mkdirp,
      skipIfIdentical,
      mode
    })
    return {
      skipped,
      filename: path.relative(cwd, resolved)
    }
  }
}

module.exports = PonWriter

/**
 * @typedef {Object} WriteResult
 * @property {boolean} skipped - Skipped or not
 * @property {string} filename - Written filename
 */
