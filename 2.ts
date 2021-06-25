// Array Deduping
// Write an algorithm that removes duplicates from an array.
// Do not use a function like filter() to solve this.
// Once you have solved the problem,
// demonstrate how it can be solved with filter().
// Solve the problem with and without recursion.

type junk = (string | number)[]

// 😈 hehe
const dedupeUsingSet =
(elements: junk): junk => Array.from(new Set(elements))

const dedupeIterative = (elements: junk): junk => {
  const seenSoFar = new Set()
  const dedupedElements = []
  while (elements[0]) {
    const element = elements.shift()
    if (seenSoFar.has(element)) continue
    seenSoFar.add(element)
    dedupedElements.push(element)
  }
  return dedupedElements
}

const dedupeRecursive = (
  elements: junk,
  seenSoFar = new Set(),
  dedupedElements: junk = []
): junk => {
  console.log(elements)

  return elements[0]
    ? (() => {
      const element = elements[0]
      console.log(element)
      const newElements = elements.slice(1)
      const elementIsNew = !seenSoFar.has(element)
      return elementIsNew
        ? dedupeRecursive(
          newElements,
          seenSoFar.add(element),
          [...dedupedElements, element]
        )
        : dedupeRecursive(
          newElements,
          seenSoFar,
          dedupedElements
        )
    })()
    : dedupedElements
}

module.exports = (input: string): void => {
  const inputAsArray = (): junk => input.split(`,`)
  const outputUsingSet = dedupeUsingSet(inputAsArray())
  const outputIterative = dedupeIterative(inputAsArray())
  const outputRecursive = dedupeRecursive(inputAsArray())
  console.log(`outputUsingSet:`, outputUsingSet)
  console.log(`outputIterative:`, outputIterative)
  console.log(`outputRecursive:`, outputRecursive)
}
