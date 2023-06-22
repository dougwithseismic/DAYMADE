import { getDrawByName } from '.'
import draws from '../../draws'
// Mocking the draws object

jest.mock('../../draws', () => ({
  DAYMADE: {
    name: 'DayMade',
    pools: [
      { label: 'Main', length: 5 },
      { label: 'Bonus', length: 2 },
    ],
    prizes: [],
  },
  DAILY_FREE: {
    name: 'DailyFree',
    pools: [
      { label: 'Main', length: 5 },
      { label: 'Bonus', length: 2 },
    ],
    prizes: [],
  },
}))

describe('getDrawByName', () => {
  it('should return the correct draw when a valid draw name is given', () => {
    const result = getDrawByName('DAYMADE')
    expect(result).toEqual(draws.DAYMADE)
  })

  it('should throw an error when an invalid draw name is given', () => {
    const invalidDrawName = 'INVALID_DRAW'
    // @ts-expect-error
    expect(() => getDrawByName(invalidDrawName)).toThrowError(
      `Invalid prize draw: ${invalidDrawName}. Please ensure the draw name is correct and exists in the 'draws' object.`,
    )
  })
})
