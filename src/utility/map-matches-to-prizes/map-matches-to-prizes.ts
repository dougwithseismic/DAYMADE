import { Draw, Prize } from '../../types'

type MapMatchesToPrizes = (matches: number[][], draw: Draw) => Prize[] | null

/**
 * Function to map matches to prizes.
 * @param matches - Matches
 * @param draw - Draw
 * @returns Prize[] | null - Prizes won or null
 */
export const mapMatchesToPrizes: MapMatchesToPrizes = (matches, draw) => {
  const matchedPrizes = draw.prizes.filter((prize) => {
    // Check if the length of the matches for this prize matches the length of the corresponding sub-array in the input
    return prize.matches.every((match, index) => match === matches[index]?.length)
  })

  return matchedPrizes.length > 0 ? matchedPrizes : null
}
