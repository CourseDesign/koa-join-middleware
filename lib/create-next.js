function createNext(nextFunction, ctx, next) {
  return async () => {
    await nextFunction(ctx, next);
  };
}

module.exports = createNext;
