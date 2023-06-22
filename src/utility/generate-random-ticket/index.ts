import draws from '../../draws'
import { Draw, PrizeDrawName } from '../../types'

interface RandomTicketResult {
  prizeDraw: PrizeDrawName
  result: number[]
  ticket: number[]
}
export const generateRandomNumbers = (draw: Draw): number[] => {
  return draw.pools
    .map((pool) => {
      const poolNumbers = new Set<number>()
      while (poolNumbers.size < pool.length) {
        const randomNumber = Math.floor(Math.random() * (pool.max - pool.min + 1)) + pool.min
        poolNumbers.add(randomNumber)
      }
      return Array.from(poolNumbers)
    })
    .flat()
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
