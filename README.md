![Test](https://github.com/anri-asaturov/tws-api-nodejs-ported/workflows/Test/badge.svg)
[![Coverage](https://coveralls.io/repos/github/anri-asaturov/tws-api-nodejs-ported/badge.svg?branch=master)](https://coveralls.io/github/anri-asaturov/tws-api-nodejs-ported?branch=master)

# tws-api-nodejs-ported

NodeJS Interactive Brokers Trader Workstation API Client. Ported to TypeScript manually from official c# library.

c# sources are intentionally kept in the same folder with ported files for reference and to simplify review, updates, diff and porting.

# Usage and porting notes

- when class implements `Equals()` function, remember to use it instead of `===`, unless you really want to compare by ref for some reason.

- `something == null` comparison is used to test for `null` or `undefined` in one expression.

- `GetHashCode()` implementation does a valid hash but returns string instead of number. It is ok, because it's not used internally by js engine as it does with .net.

- private field + public getter/setter pattern is replaces with just one public field for simplicity.

- when it is safe to do so, floats are being compared with `===`. Example: numbers came from a socket.

- some default values changed from `null` to `'' or 0 or false`, usage shows it's safe and it simplifies things.

# Testing

- some test files may seem to be useless/excessive, they've been created to include file in coverage report in case that file will get testable logic in future
