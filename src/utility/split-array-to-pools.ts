import { TicketType, Pool } from '../types'

type SplitArrayToPools = (ticket: TicketType, pools: Pool[]) => number[][]

/**
 * Function to split array into pools.
 * @param ticket - Ticket number list. The numbers on the ticket to be split into pools
 * @param pools - The pools belonging to our specific Draw.
 * @returns number[][] - split into different pools
 */
export const splitArrayToPools: SplitArrayToPools = (ticket, pools) => {
  // Create an array of the lengths of each pool
  const poolLengths = pools.map((pool) => pool.length)
  // Calculate the total length of all the pools combined
  const totalPoolLength = poolLengths.reduce((a, b) => a + b, 0)

  // If the ticket length does not match the total pool length, throw an error
  if (ticket.length !== totalPoolLength) {
    throw new Error(
      `Ticket length (${ticket.length}) does not match total pool length (${totalPoolLength})`,
    )
  }

  let poolStartIndex = 0 // Keep track of the start index of the current pool. This will be incremented as we loop through the pools

  // Split the ticket into separate arrays for each pool
  const ticketByPools = pools.map((pool) => {
    const poolNumbers = ticket.slice(poolStartIndex, poolStartIndex + pool.length)
    poolStartIndex += pool.length
    return poolNumbers
  })

  // Return the array of arrays representing the ticket split into pools
  return ticketByPools
}
