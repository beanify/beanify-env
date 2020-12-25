const Beanify = require('beanify')
const Env = require('./index')
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
    console.log(beanify.$env)
  })
