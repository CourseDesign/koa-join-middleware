const joinMiddleWare = require('../lib');

async function first(ctx, next) {
  console.log('1');

  await next();
}

async function second(ctx, next) {
  console.log('2');

  await next();
}

const middleware = joinMiddleWare(first, second);

middleware({}, () => {}).then(() => {});