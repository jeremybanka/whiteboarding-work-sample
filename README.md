# Whiteboarding Work Sample

I worked through these problems independently in six hours, providing the best solutions I could come up with.

## Tech Used

- TypeScript compiled with tsc
- Node.js

## Setup

- Clone this repo: `$ git clone https://github.com/jeremybanka/whiteboarding-work-sample`
- Install tools: `$ npm i`
- Compile the JS: In the root folder, `$ npm run build`
- Compile changes as you make them: `$ npm run start`

## Seeing Output

- Run the solutions with node: 
  ```
  $ node log # {INPUT}
  ```
  Where `#` is the solution you want to see output for, and `{INPUT}` is the input you want it to use. 
  
  It will take care of parsing numbers and arrays and things (see the `module.exports` of each solution file to see how).

  When you want to pass an array from the command line, just do it like so: 
  ```
  $ node log 5 3,4,6,1,6
  ```
  No braces, no spaces. This would be read by solution 5 as `[3,4,6,1,6]`

## License
GPL ^3.0. All Rights Reversed.