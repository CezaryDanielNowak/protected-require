# protectedRequire(moduleName [, verbose])
Require without application crashing on invalid module syntax


## Installation
```
npm install --save-dev protected-require
```


## Usage
```
const protectedRequire = require('protected-require');

const someModule = protectedRequire('some-module');
```


## verbose
pass `verbose` param to get error details.
```
const someModule = protectedRequire('some-module', true);
```