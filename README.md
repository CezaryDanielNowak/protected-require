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


## Verbose
pass `verbose` param to get error details.
```
const someModule = protectedRequire('some-module', true);
```

## Live-reload tip
RequireJS is caching required module. To get fresh file version each time, use following code: 
```
var componentsPath = require.resolve('some-module');
delete require.cache[componentsPath];
protectedRequire(componentsPath);
```
