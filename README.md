<h1 align="center">es6-enum</h1>
<h3 align="center">ES6 enum creation utility</h3>
<p align="center">
  <a target="_blank" href="https://travis-ci.org/epegzz/es6-enum">
    <img alt="Travis" src="https://img.shields.io/travis/epegzz/es6-enum.svg?style=flat-square">
  </a>
  <a target="_blank" href="https://codeclimate.com/github/epegzz/es6-enum/maintainability">
    <img alt="Maintainability" src="https://img.shields.io/codeclimate/maintainability/epegzz/es6-enum.svg?style=flat-square">
  </a>
  <a target="_blank" href="https://codecov.io/gh/epegzz/es6-enum">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/epegzz/es6-enum.svg?style=flat-square">
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/@epegzz/es6-enum">
    <img alt="npm version" src="https://img.shields.io/npm/v/@epegzz/es6-enum.svg?style=flat-square">
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/@epegzz/es6-enum">
    <img alt="npm installs" src="https://img.shields.io/npm/dm/@epegzz/es6-enum.svg?style=flat-square">
  </a>
  <a target="_blank" href="https://david-dm.org/epegzz/es6-enum">
    <img alt="dependencies" src="https://img.shields.io/david/epegzz/es6-enum.svg?style=flat-square">
  </a>
</p>


```javascript
import { StringEnum } from '@epegzz/es6-enum'

const COLOR = StringEnum('blue', 'green', 'red')

// The above is equal to

const COLOR = Object.freeze({
  blue: 'blue',
  green: 'green',
  red: 'red'
})


```

