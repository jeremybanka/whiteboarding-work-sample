module.exports = (recursiveFunction: CallableFunction): CallableFunction =>
  (...args) => {
    let result = recursiveFunction(...args)
    while (typeof result === `function`) result = result()
    return result
  }
