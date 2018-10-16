
export const StringEnum = () =>
  Object.freeze(Array.from(arguments).reduce((key, result) => ({
    ...result,
    [String(key)]: String(key)
  }), {}))
