// Compressing Strings
// Write an algorithm that takes a string
// with repeated characters and compresses them,
// using a number to show how many times the repeated
// character has been compressed.
// For instance, aaa would be written as 3a.
// Solve the problem with and without recursion.

/* eslint-disable @typescript-eslint/no-var-requires */
const trampoline = require(`./trampoline.js`)

const compressIterative = (input:string): string => {
  const inputAsArray = input.split(``)
  const outputAsArray = []
  let currentStreak = 1
  let currentCharacter:string
  while (inputAsArray[0]) {
    const prevCharacter = currentCharacter
    currentCharacter = inputAsArray.shift()
    console.log(prevCharacter, currentCharacter, currentStreak)
    if (prevCharacter === currentCharacter) {
      currentStreak += 1
    } else if (currentStreak > 1) {
      outputAsArray.push(currentStreak + prevCharacter)
      currentStreak = 1
    } else {
      outputAsArray.push(prevCharacter)
    }
  }
  if (currentStreak > 1) outputAsArray.push(currentStreak + currentCharacter)
  else outputAsArray.push(currentCharacter)
  return outputAsArray.join(``)
}

interface IcompressRecursive {
  input: string
  streak?: number
  output?: string
}

const compressRecursive = ({ // 😩👌
  input,
  streak = 1,
  output = ``,
}: IcompressRecursive): string | CallableFunction =>
  input
    ? (() => {
      const currentCharacter = input[0]
      const nextCharacter = input[1]
      const streakWillContinue = currentCharacter === nextCharacter
      return compressRecursive({
        input: input.slice(1),
        streak: streakWillContinue
          ? streak + 1
          : 1,
        output: output + (
          streakWillContinue
            ? ``
            : streak > 1
              ? streak + currentCharacter
              : currentCharacter
        ),
      })
    })
    : output

const compressRecursiveSafe = trampoline(compressRecursive)

module.exports = (input: string): void => {
  const outputIterative = compressIterative(input)
  const outputRecursive = compressRecursiveSafe({ input })
  console.log(`outputIterative:`, outputIterative)
  console.log(`outputRecursive:`, outputRecursive)
}
