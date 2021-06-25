// Checking for Uniqueness

// Write an algorithm that determines whether
// all the elements in a string are unique.
// You may not convert the string into an array
// or use array methods to solve this problem.
// The algorithm should return a boolean.

const doesNotRepeatLetters = (input:string): boolean => {
  while (input) {
    const firstChar = input[0]
    for (let i = 1; i < input.length; i++) {
      const otherChar = input[i]
      if (firstChar === otherChar) return false
    }
    input = input.slice(1)
  }
  return true
}

module.exports = (input:string): void => {
  const output = doesNotRepeatLetters(input)
  console.log(`output:`, output)
}
