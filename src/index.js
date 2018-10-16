
export const StringEnum = (...args) =>
  Object.freeze(Array.from(args).reduce((result, key) => ({
    ...result,
    [String(key)]: String(key)
  }), {}))
