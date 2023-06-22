import { Prize, Pool } from '../types'

type PrintResults = (
  prize: Prize[] | null,
  lotteryName: string,
  matches: number[][],
  pools: Pool[],
) => void

/**
 * Function to print the results.
 * @param {Prize[] | null} prize - Prize won
 * @param {string} lotteryName - Name of the lottery
 * @param {number[][]} matches - Matches
 * @param {Pool[]} pools - Pool list
 */
export const printResults: PrintResults = (prize, lotteryName, matches, pools) => {
  // If the ticket did not win a prize
  if (!prize || prize.length === 0) {
    console.log(`This ticket did not win a prize in the ${lotteryName} lottery.`)
    return
  }

  // If the ticket won a prize
  for (const { prizeClass, name } of prize) {
    console.log(
      `This ticket won prize class ${prizeClass} with the name ${name} in the ${lotteryName} lottery.`,
    )

    // Print details of how the ticket won the prize
    const matchDetails = matches
      .map((match, index) => {
        return `Matched the numbers ${match.join(', ')} from pool ${
          pools[index].label || index + 1
        }`
      })
      .join(' and ')

    console.log(matchDetails)
  }
}
