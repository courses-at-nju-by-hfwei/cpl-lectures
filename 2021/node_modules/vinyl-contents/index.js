'use strict';

var stream = require('readable-stream');
var Vinyl = require('vinyl');
var bl = require('bl');

function vinylContents(file, cb) {
  if (!Vinyl.isVinyl(file)) {
    cb(new Error('Must be a Vinyl object'));
    return;
  }

  if (file.isBuffer()) {
    cb(null, file.contents);
    return;
  }

  if (file.isStream()) {
    var bufferList = bl();
    stream.pipeline([
      file.contents,
      bufferList,
    ], function(err) {
      if (err) {
        cb(err);
        return;
      }

      cb(null, bufferList);
    });
    return;
  }

  cb();
}

module.exports = vinylContents;
