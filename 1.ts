// Turning Strings to URLs

// URLs cannot have spaces.
// Instead, all spaces in a string are replaced with %20.
// Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regexps to solve this problem.
// Solve the problem with and without recursion.

// Example
// "Jasmine Ann Jones" ->  "Jasmine%20Ann%20Jones"

/*
For this function, I understood that I would need to isolate a
single action that would be repeated, and that the repetition
would need to proceed until a certain terminal condition was reached.

I see the process as being "filtering" the string. I need to
- "take away" each character from the input string
- check if that character is a space
- add it to the output string if it's not
- add "%20" if it is, and drop the space on the floor
- i know i'm done when nothing's left in the input string
*/

function urlifyIterative(input: string): string {
  let output = ``
  while (input) { // if nothing's left (`` is falsy), i'm done
    const currentCharacter = input[0]
    input = input.slice(1, input.length) // take away
    output += currentCharacter === ` ` // is it a space?
      ? `%20` // if so add this thing
      : currentCharacter // else add the character
  }
  return output
}

const urlifyRecursive = (input: string, output = ``): string => {
  const currentCharacter = input[0]
  const plus = currentCharacter === ` ` // is it a space?
    ? `%20` // if so add this thing
    : currentCharacter // else add the character
  const outputPlus = output + plus
  return input // if nothing's left (`` is falsy), i'm done
    ? urlifyRecursive(
      input.slice(1, input.length), // take away
      outputPlus
    )
    : output // done
}

module.exports = (input: string): void => {
  const outputIterative = urlifyIterative(input)
  const outputRecursive = urlifyRecursive(input)
  console.log(`outputIterative:`, outputIterative)
  console.log(`outputRecursive:`, outputRecursive)
}
