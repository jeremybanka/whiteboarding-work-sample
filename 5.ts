// Array Sorting

// Write an algorithm that sorts an array
// without using the sort() method.

/* eslint-disable @typescript-eslint/no-var-requires */

const sortRecursive = (
  elements: number[],
  elementsSorted = []
): number[] | CallableFunction =>
  elements[0]
    ? (() => {
      const elementsSortedNew = [...elementsSorted]
      const unsortedElement = elements[0]
      const sortedIdx = elementsSorted.findIndex(
        element => element > unsortedElement
      )
      if (sortedIdx === -1) {
        elementsSortedNew.push(unsortedElement)
      } else {
        elementsSortedNew.splice(sortedIdx, 0, unsortedElement)
      }
      return sort(
        elements.slice(1),
        elementsSortedNew
      )
    })
    : elementsSorted

const sort = require(`./trampoline.js`)(sortRecursive)

module.exports = (input: string): void => {
  const inputAsNumberArray = () => input.split(`,`).map(
    string => parseInt(string, 10)
  )
  const output = sort(inputAsNumberArray())
  console.log(`output:`, output)
}
