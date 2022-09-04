# jstransformer-stylus

[Stylus](https://learnboost.github.io/stylus/) support for [JSTransformers](http://github.com/jstransformers/jstransformer-stylus).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-stylus/master.svg)](https://travis-ci.org/jstransformers/jstransformer-stylus)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-stylus/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-stylus)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-stylus/master.svg)](http://david-dm.org/jstransformers/jstransformer-stylus)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-stylus.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-stylus.svg)](https://www.npmjs.org/package/jstransformer-stylus)

## Installation

    npm install jstransformer-stylus

## API

```js
var stylus = require('jstransformer')(require('jstransformer-stylus'))

var css = "fonts = helvetica, arial, sans-serif\
body {\
  padding: 50px;\
  font: 14px/1.4 fonts;\
}"
stylus.render(css).body
```

## License

MIT
