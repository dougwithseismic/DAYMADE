import { Draw, PrizeDrawName } from '../../types'
import draws from '../../draws'

type GetDrawByName = (prizeDraw: PrizeDrawName) => Draw

/**
 * This helper function retrieves a draw by its name.
 *
 * @param {PrizeDrawName} prizeDraw - The name of the prize draw.
 * @returns {Draw} The draw that matches the given name.
 * @throws Will throw an error if the prize draw name is invalid (i.e., it does not exist in the draws object).
 */
export const getDrawByName: GetDrawByName = (prizeDraw) => {
  const draw = draws[prizeDraw]

  // If the draw doesn't exist in the 'draws' object, throw an error.
  if (!draw) {
    throw new Error(
      `Invalid prize draw: ${prizeDraw}. Please ensure the draw name is correct and exists in the 'draws' object.`,
    )
  }

  return draw
}
