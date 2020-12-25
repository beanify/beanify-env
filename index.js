const envSchema = require('env-schema')

module.exports = function (beanify, opts, done) {
  try {
    const config = envSchema(opts)
    beanify.decorate('$env', config)
    done()
  } catch (e) {
    done(e)
  }
}
