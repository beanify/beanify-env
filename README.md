# beanify-env

Tools for loading and checking environment variables

## Install

```bash
npm i beanify-env --save
```

with yarn

```bash
yarn add beanify-env
```

## Usage

```javascript
const Beanify = require('beanify')
const Env = require('beanify-env')
const beanify = Beanify({})

beanify
  .register(Env, {
    schema: {
      type: 'object',
      properties: {
        PORT: {
          type: 'number'
        }
      },
      required: ['PORT']
    },
    dotenv: true
  })
  .ready(e => {
    e && beanify.$log.error(e.message)
    beanify.print()
    console.log(beanify.$env) // { PORT: 911 }
  })
```

```
// .env
PORT = 911
```

## Options

- `schema`: (required) environment variable schema.check [here](https://json-schema.org/)
- `data`: value of custom data
- `env`: whether to load system environment variables.default true
- `dotenv`: whether to load the intermediate environment variable of `.env` file.check [here](https://github.com/motdotla/dotenv#options)

## Decorators

- `$env`: gets the converted environment variable
