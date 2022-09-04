<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# vinyl-contents

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Azure Pipelines Build Status][azure-pipelines-image]][azure-pipelines-url] [![Travis Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Gitter chat][gitter-image]][gitter-url]

Utility to read the contents of a vinyl file.

## Usage

```js
/*
  WARNING: This is a very naive plugin implementation
  It is only meant for demonstation purposes.
  For a more complete implementation, see: https://github.com/gulp-community/gulp-pug
*/
var through = require('through2');
var pug = require('pug');
var vinylContents = require('vinyl-contents');

function gulpPug(options) {
  return through.obj(function(file, _enc, cb) {
    vinylContents(file, function(err, contents) {
      if (err) {
        return cb(err);
      }

      if (!contents) {
        return cb();
      }

      file.contents = pug.compile(contents.toString(), options)();
      cb(null, file);
    });
  });
}
```

## API

### `vinylContents(file, callback)`

__Warning:__ Only use this if interacting with a library that can __only__ receive strings or buffers. This loads all streaming contents into memory which can cause unexpected results for your end-users.

Takes a Vinyl file and an error-first callback. Calls the callback with an error if one occur (or if the first argument is not a Vinyl file), or the file contents if no error occurs.

If the Vinyl contents are:
* A Buffer, will be returned directly.
* A Stream, will be buffered into a BufferList and returned.
* Empty, will be undefined.

## License

MIT

[downloads-image]: http://img.shields.io/npm/dm/vinyl-contents.svg
[npm-url]: https://www.npmjs.com/package/vinyl-contents
[npm-image]: http://img.shields.io/npm/v/vinyl-contents.svg

[azure-pipelines-url]: https://dev.azure.com/gulpjs/gulp/_build/latest?definitionId=5&branchName=master
[azure-pipelines-image]: https://dev.azure.com/gulpjs/gulp/_apis/build/status/vinyl-contents?branchName=master

[travis-url]: https://travis-ci.org/gulpjs/vinyl-contents
[travis-image]: http://img.shields.io/travis/gulpjs/vinyl-contents.svg?label=travis-ci

[appveyor-url]: https://ci.appveyor.com/project/gulpjs/vinyl-contents
[appveyor-image]: https://img.shields.io/appveyor/ci/gulpjs/vinyl-contents.svg?label=appveyor

[coveralls-url]: https://coveralls.io/r/gulpjs/vinyl-contents
[coveralls-image]: http://img.shields.io/coveralls/gulpjs/vinyl-contents/master.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg
