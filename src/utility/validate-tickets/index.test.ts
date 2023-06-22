import { validateTicket } from '.'

describe('validateTicket', () => {
  it('should return true for a valid ticket', () => {
    const ticket = [
      [1, 2, 3, 4],
      [5, 6, 7],
    ]
    const pools = [
      { label: 'A', min: 1, max: 10, length: 4 },
      { label: 'B', min: 1, max: 10, length: 3 },
    ]

    const result = validateTicket(ticket, pools)

    expect(result).toBeTruthy()
  })

  it('should return false if a ticket number does not fit within the min and max of the pool', () => {
    const ticket = [
      [1, 2, 3, 11], // 11 is not within 1-10
      [5, 6, 7],
    ]
    const pools = [
      { label: 'A', min: 1, max: 10, length: 4 },
      { label: 'B', min: 1, max: 10, length: 3 },
    ]

    const result = validateTicket(ticket, pools)

    expect(result).toBeFalsy()
  })

  it('should return false if a pool in the ticket does not have the correct length', () => {
    const ticket = [
      [1, 2, 3], // Should be of length 4
      [5, 6, 7],
    ]
    const pools = [
      { label: 'A', min: 1, max: 10, length: 4 },
      { label: 'B', min: 1, max: 10, length: 3 },
    ]

    const result = validateTicket(ticket, pools)

    expect(result).toBeFalsy()
  })

  it('should return false if a pool in the ticket has duplicates', () => {
    const ticket = [
      [1, 2, 2, 4], // Duplicate number 2
      [5, 6, 7],
    ]
    const pools = [
      { label: 'A', min: 1, max: 10, length: 4 },
      { label: 'B', min: 1, max: 10, length: 3 },
    ]

    const result = validateTicket(ticket, pools)

    expect(result).toBeFalsy()
  })
})
