const createNext = require('./create-next');

function join(...middleware) {
  return async (ctx, next) => {

    let runNext = next;
    for (const func of middleware.reverse()) {
      runNext = createNext(func, ctx, runNext);
    }

    await runNext();
  }
}

module.exports = join;
