const compose = require('koa-compose');

function join(...middleware) {
  return compose(middleware);
}

module.exports = join;
