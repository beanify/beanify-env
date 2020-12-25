const envSchema = require('env-schema')

module.exports = async function (beanify, opts) {
  const config = envSchema(opts)
  beanify.decorate('$env', config)
}
