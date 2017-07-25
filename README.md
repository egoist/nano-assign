# nano-assign

[![NPM version](https://img.shields.io/npm/v/nano-assign.svg?style=flat)](https://npmjs.com/package/nano-assign) [![NPM downloads](https://img.shields.io/npm/dm/nano-assign.svg?style=flat)](https://npmjs.com/package/nano-assign) [![CircleCI](https://circleci.com/gh/egoist/nano-assign/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/nano-assign/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add nano-assign
```

## Usage

```js
const assign = require('nano-assign')

assign({}, { foo: 'foo' }, null, undefined, { foo: 'bar' })
//=> { foo: 'bar' }
```

## Gotchas

[See the 7 lines of code to know what we're doing here ;P](./src/index.js)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**nano-assign** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/nano-assign/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
