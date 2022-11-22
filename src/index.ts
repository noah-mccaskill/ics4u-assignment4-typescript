/**
 * This program prints an hourglass.
 *
 * By: Noah McCaskill
 * Version: 1.0
 * Since: 2022-11-21
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Function of Hourglass
 *
 * @param {number} integer number of disks
 * @param {number} spacesNum first peg
 */
function asteristics(integer: number, spacesNum: number = 0): void {
  // Generate asteristics.
  let output: string = ''

  for (let counter: number = 0; counter < spacesNum; counter++) {
    output += ' '
  }

  for (let counter1: number = 0; counter1 < integer; counter1++) {
    output += '* '
  }

  console.log(output)

  if (integer > 1) {
    asteristics(integer - 1, spacesNum + 1)
  }
  console.log(output)
}

const input = prompt('Insert height of hourglass: ')
try {
  const inputNum = parseInt(input)

  if (isNaN(inputNum)) {
    console.log('That is an invalid number.')
  } else if (inputNum <= 0) {
    console.log('That is an invalid integer')
  } else asteristics(inputNum)
} catch (e) {
  console.log('That is an invalid number')
}

console.log('\nDone.')
