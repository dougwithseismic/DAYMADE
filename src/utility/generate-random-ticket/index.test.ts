import draws from '../../draws'
import generateRandomTicket, { generateRandomNumbers } from '.'
import { Draw, PrizeDrawName } from '../../types'

describe('generateRandomNumbers', () => {
  test('should generate correct amount of numbers in the correct range', () => {
    const randomDrawName = Object.keys(draws)[0] as PrizeDrawName
    const randomDraw = draws[randomDrawName]

    const result = generateRandomNumbers(randomDraw)

    const flatPoolsLength = randomDraw.pools.reduce((acc, pool) => acc + pool.length, 0)

    expect(result).toHaveLength(flatPoolsLength)

    randomDraw.pools.forEach((pool, i) => {
      const poolNumbers = result.slice(i * pool.length, (i + 1) * pool.length)
      poolNumbers.forEach((num: number) => {
        expect(num).toBeGreaterThanOrEqual(pool.min)
        expect(num).toBeLessThanOrEqual(pool.max)
      })
    })
  })
})

describe('generateRandomTicket', () => {
  test('should return an object with correct structure', () => {
    const result = generateRandomTicket()

    expect(result).toHaveProperty('prizeDraw')
    expect(result).toHaveProperty('result')
    expect(result).toHaveProperty('ticket')

    expect(typeof result.prizeDraw).toBe('string')
    expect(Array.isArray(result.result)).toBe(true)
    expect(Array.isArray(result.ticket)).toBe(true)
  })
})
