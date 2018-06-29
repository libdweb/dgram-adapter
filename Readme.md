# node-dgram

[![travis][travis.icon]][travis.url]
[![package][version.icon] ![downloads][downloads.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]

Library allows Firefox extensions to polyfill node [dgram](https://nodejs.org/api/dgram.html)module using [libdweb][].

## Usage

```js
import drgamify from "@libdweb/node-dgram"
const dgram = drgamify(browser)
```

## Install

    npm install @libdweb/node-dgram

[travis.icon]: https://travis-ci.org/Gozala/node-dgram.svg?branch=master
[travis.url]: https://travis-ci.org/Gozala/node-dgram
[version.icon]: https://img.shields.io/npm/v/node-dgram.svg
[downloads.icon]: https://img.shields.io/npm/dm/node-dgram.svg
[package.url]: https://npmjs.org/package/node-dgram
[downloads.image]: https://img.shields.io/npm/dm/node-dgram.svg
[downloads.url]: https://npmjs.org/package/node-dgram
[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]: https://github.com/prettier/prettier
[libdweb]: https://github.com/mozilla/libdweb/
