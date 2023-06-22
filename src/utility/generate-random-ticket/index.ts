import draws from '../../draws'
import { Draw, PrizeDrawName } from '../../types'

interface RandomTicketResult {
  prizeDraw: PrizeDrawName
  result: number[]
  ticket: number[]
}
export const generateRandomNumbers = (draw: Draw): number[] => {
  const randomNumbers = draw.pools
    .map((pool) => {
      const poolNumbers = new Set<number>() // We're using a set to prevent duplicates.
      while (poolNumbers.size < pool.length) {
        const randomNumber = Math.floor(Math.random() * (pool.max - pool.min + 1)) + pool.min
        poolNumbers.add(randomNumber) // We're adding a new random number to the set so that we can replace duplicates.
      }
      return Array.from(poolNumbers)
    })
    .flat()

  return randomNumbers
}

const generateRandomTicket = (): RandomTicketResult => {
  const drawNames = Object.keys(draws) as PrizeDrawName[]
  const randomDrawName = drawNames[Math.floor(Math.random() * drawNames.length)]
  const randomDraw = draws[randomDrawName]

  const randomTicket = generateRandomNumbers(randomDraw)
  const randomResults = generateRandomNumbers(randomDraw)

  return {
    prizeDraw: randomDrawName,
    result: randomResults,
    ticket: randomTicket,
  }
}

export default generateRandomTicket

generateRandomTicket()