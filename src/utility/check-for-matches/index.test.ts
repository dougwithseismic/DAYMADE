import { checkForMatches } from '.' // replace with actual path to your file

describe('checkForMatches', () => {
  it('should return matches correctly', () => {
    const ticket = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const result = [
      [1, 2, 3],
      [4, 5, 7],
    ]

    const expected = [
      [1, 2, 3],
      [4, 5],
    ]
    const actual = checkForMatches(ticket, result)
    expect(actual).toEqual(expected)
  })

  it('should return empty arrays if there are no matches', () => {
    const ticket = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const result = [
      [7, 8, 9],
      [10, 11, 12],
    ]

    const expected = [[], []]
    const actual = checkForMatches(ticket, result)
    expect(actual).toEqual(expected)
  })
})
