import { splitArrayToPools } from './index'

describe('splitArrayToPools', () => {
  it('should split ticket numbers into the correct pools', () => {
    const ticket = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const pools = [
      { label: 'A', length: 4, min: 1, max: 10 },
      { label: 'B', length: 3, min: 1, max: 10 },
      { label: 'C', length: 3, min: 1, max: 10 },
    ]

    const result = splitArrayToPools(ticket, pools)

    expect(result).toEqual([
      [1, 2, 3, 4], // Pool A
      [5, 6, 7], // Pool B
      [8, 9, 10], // Pool C
    ])
  })

  it('should throw an error when ticket length does not match total pool length', () => {
    const ticket = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const pools = [
      { label: 'A', length: 4, min: 1, max: 10 },
      { label: 'B', length: 3, min: 1, max: 10 },
      { label: 'C', length: 3, min: 1, max: 10 },
    ]

    expect(() => splitArrayToPools(ticket, pools)).toThrow(Error)
  })
})
