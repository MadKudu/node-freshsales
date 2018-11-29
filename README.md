# node-freshsales
[![CircleCI](https://circleci.com/gh/MadKudu/node-freshsales.svg?style=svg)](https://circleci.com/gh/MadKudu/node-freshsales)
[![Code Climate](https://codeclimate.com/github/https://codeclimate.com/github/MadKudu/node-freshsales/badges/gpa.svg)](https://codeclimate.com/github/https://codeclimate.com/github/MadKudu/node-freshsales)
[![Test Coverage](https://codeclimate.com/github/https://codeclimate.com/github/MadKudu/node-freshsales/badges/coverage.svg)](https://codeclimate.com/github/https://codeclimate.com/github/MadKudu/node-freshsales/coverage)

Javascript / node.js wrapper for the [Freshsales API](https://www.freshsales.io/api/)

## Installing

```shell
npm install freshsales
```

## Instantiate client

```javascript
const Freshsales = require('freshsales');
const freshsales = new Freshsales({ apiKey: 'key', domain: 'domain' });
```

You may use this library in your Typescript project via:

```javascript
import Freshsales from 'freshsales';
const freshsales = new Freshsales({ apiKey: 'key', domain: 'domain' });
```

## License

MIT

## Contributing

### Tests

```
API_KEY=xxx DOMAIN=xxx npm test
```

### Contributors

- Paul Cothenet @pcothenet
