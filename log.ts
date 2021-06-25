/* eslint-disable @typescript-eslint/no-var-requires */

const solution1 = require(`./1.js`)
const solution2 = require(`./2.js`)
const solution3 = require(`./3.js`)

const run = (chosenFile: number, input: string):void => {
  switch (chosenFile) {
    case 1: return solution1(input)
    case 2: return solution2(input)
    case 3: return solution3(input)
    default: return console.log(
      `invalid file name`,
      `valid options`,
      `1, 2, 3, 4, 5`
    )
  }
}

const chosenFile = parseInt(process.argv[2], 10)
const input = process.argv[3]
run(chosenFile, input)
