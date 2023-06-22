type CheckForMatches = (ticket: number[][], result: number[][]) => number[][]

/**
 * Function to check for matches.
 * @param ticket - Ticket number list
 * @param result - Result number list
 * @returns number[][] - Matches
 */

export const checkForMatches: CheckForMatches = (ticket, result) => {
  const matches = result.map((resultPool, index) => {
    const ticketPool = ticket[index]
    const poolMatches = resultPool.filter((resultNumber: number) =>
      ticketPool.includes(resultNumber),
    )
    return poolMatches
  })
  return matches
}
