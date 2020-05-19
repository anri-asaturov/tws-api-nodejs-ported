![Test](https://github.com/anri-asaturov/tws-api-nodejs-ported/workflows/Test/badge.svg)
[![Coverage](https://coveralls.io/repos/github/anri-asaturov/tws-api-nodejs-ported/badge.svg?branch=master)](https://coveralls.io/github/anri-asaturov/tws-api-nodejs-ported?branch=master)

# tws-api-nodejs-ported

NodeJS Interactive Brokers Trader Workstation API Client. Ported manually from official c# library.

c# sources are intentionally kept in the same folder with ported files to simplify review, updates, diff and porting.

# Notes

- `something == null` comparison is used to test for `null` or `undefined` in one expression.

- `GetHashCode()` implementation does a valid hash but returns string instead of number. It is ok, because it's not used internally by js engine as it does with .net.

- private field + public getter/setter pattern is replaces with just one public field for simplicity.

- when it is safe to do so, floats are being compared with `===`. Example: numbers came from a socket.
