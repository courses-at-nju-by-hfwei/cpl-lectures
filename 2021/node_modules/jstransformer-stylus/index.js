'use strict'

const path = require('path')
const fs = require('fs')
const stylus = require('stylus')
const clone = require('clone')

exports.name = 'stylus'
exports.inputFormats = ['styl', 'stylus']
exports.outputFormat = 'css'

/**
 * Retrieves a Stylus renderer from the given options.
 */
function getRenderer(str, options, locals) {
  const renderer = stylus(str)

  // Special handling for stylus js api functions
  // given { define: { foo: 'bar', baz: 'quux' } }
  // runs renderer.define('foo', 'bar').define('baz', 'quux')

  const allowed = ['set', 'define']
  const special = {}
  const allowedSingle = ['include', 'import', 'use']
  const specialSingle = {}
  const normal = clone(options)

  for (const option in options) {
    // If the option is a special option
    if (allowed.indexOf(options) > -1) {
      // Add it to the special object
      special[option] = options[option]
      // Remove it from the options passed to stylus
      delete normal[option]
    } else if (allowedSingle.indexOf(option) > -1) {
      // If the option is a specialSingle option
      // Add it to the specialSingle object
      specialSingle[option] = options[option]
      // Remove it from the options passed to stylus
      delete normal[option]
    }
  }

  // Special options through their function names
  // Each method (i.e. `set` or `define`)
  for (const method in special) {
    if ({}.hasOwnProperty.call(special, method)) {
      // Each variable in the method
      for (const variable in special[method]) {
        if ({}.hasOwnProperty.call(special[method], variable)) {
          // Set it using stylus
          // Example: stylus.set(variable, value)
          renderer[method](variable, special[method][variable])
        }
      }
    }
  }

  // Special options with single parameter through their function names
  // Each method (i.e. `use`, `import`, or `include`)
  for (const method in specialSingle) {
    if ({}.hasOwnProperty.call(specialSingle, method)) {
      let imports = []
      // If it is an array (typeof array is object)
      if (typeof specialSingle[method] === 'object') {
        imports = specialSingle[method]
      } else {
        // Make it an array
        imports = [specialSingle[method]]
      }
      for (const i in imports) {
        if ({}.hasOwnProperty.call(imports, i)) {
          let fn = imports[i]
          // If it's a string, require it
          if (typeof fn === 'string') {
            fn = require(fn)() // eslint-disable-line import/no-dynamic-require
          }
          // Otherwise use it as-is, like stylus.include(fn)
          renderer[method](fn)
        }
      }
    }
  }

  // Normal options through set()
  for (const key in normal) {
    if ({}.hasOwnProperty.call(normal, key)) {
      renderer.set(key, normal[key])
    }
  }

  // Register locals as defines.
  for (const key in (locals || {})) {
    if ({}.hasOwnProperty.call((locals || {}), key)) {
      renderer.define(key, locals[key])
    }
  }
  return renderer
}

exports.render = function (str, options, locals) {
  let result
  getRenderer(str, options, locals).render((err, res) => {
    if (err) {
      throw err
    }
    // @TODO How do we know what the dependencies are?
    // @TODO This is not guarenteed to work in the callback chain.
    result = res
  })
  if (!result) {
    throw new Error('stylus compilation could not complete synchronously.')
  }
  return result
}

exports.renderFile = function (filename, options, locals) {
  options = options || {}
  options.filename = path.resolve(filename)
  const str = fs.readFileSync(filename, 'utf8')
  return exports.render(str, options, locals)
}

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    getRenderer(str, options, locals).render((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

exports.renderFileAsync = function (filename, options, locals) {
  options = options || {}
  options.filename = path.resolve(filename)
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, str) => {
      if (err) {
        reject(err)
      } else {
        resolve(exports.renderAsync(str, options, locals))
      }
    })
  })
}
