import { printResults } from './utility/print-results'
import { getDrawByName } from './utility/get-draw-by-name'

import { ResultType, TicketType, PrizeDrawName } from './types'
import { splitArrayToPools } from './utility/split-array-to-pools'
import { validateTicket } from './utility/validate-tickets'
import { checkForMatches } from './utility/check-for-matches'
import { mapMatchesToPrizes } from './utility/map-matches-to-prizes/map-matches-to-prizes'

/**
 * Function to process tickets.
 * @param prizeDraw - The name of the Prize Draw
 * @param result - The Winning Numbers (Results)
 * @param ticket - The Ticket Numbers
 */

export type ProcessTicket = (
  prizeDraw: PrizeDrawName,
  result: ResultType,
  ticket: TicketType,
) => void

export const processTicket: ProcessTicket = (prizeDraw, result, ticket) => {
  // Fetch the draw details.
  const draw = getDrawByName(prizeDraw)

  const resultsByPools = splitArrayToPools(result, draw.pools)
  const ticketByPools = splitArrayToPools(ticket, draw.pools)

  const isTicketValid = validateTicket(ticketByPools, draw.pools)

  console.log(
    'Processing ticket',
    ticketByPools,
    'for draw',
    draw.name,
    'with results',
    resultsByPools,
  )

  if (!isTicketValid) {
    console.log(`Invalid ticket for the ${draw.name} draw.`)
    return
  }

  // Check if we have matches between our results and ticket.
  const matches = checkForMatches(resultsByPools, ticketByPools)

  // Check if we have any prizes.
  const prizesWon = mapMatchesToPrizes(matches, draw)

  // Print results
  printResults(prizesWon, draw.name, matches, draw.pools)
}
