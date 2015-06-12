# dingleberry [![Build Status](https://travis-ci.org/goodybag/mongo-sql.svg?branch=master)](https://travis-ci.org/goodybag/mongo-sql)


> collection of fun utility functions

Covers a subset of useful functions from utility libs like debounce, compose
and more.

Why? Mostly as an exercise in learning es2015. That's p much it.

### Install

```shell
npm install dingleberry
```

### Usage

```js
var _ = require('dingleberry');

var add1 = function(val) { return val + 1; };
var mult2 = function(val) { return val * 2; };
var add1mult2 = _.pipeline(add1, mult2);

add1mult2(7); // 16
```

### API

* debounce(fn, interval)
* pipeline(fn, fn, ...) (alias compose)
* pluck(list, property)

More coming soon

### Build

```shell
npm install -g babel
npm install -g uglify-js
npm run build
```

### License

MIT
