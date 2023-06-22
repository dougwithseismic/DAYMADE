import { printResults } from '.'

describe('printResults', () => {
  // create console.log mock
  const logMock = jest.spyOn(console, 'log')

  afterEach(() => {
    // clear mock after each test because we're breaking console.log else.
    logMock.mockClear()
  })

  it('should log that no prize was won', () => {
    const prize = null
    const lotteryName = 'Test Lottery'
    const matches = [[1, 2, 3]]
    const pools = [{ label: 'Main', length: 3, min: 1, max: 55 }]

    printResults(prize, lotteryName, matches, pools)
    expect(logMock).toHaveBeenCalledWith(
      `This ticket did not win a prize in the ${lotteryName} lottery.`,
    )
  })

  it('should log the details of the prize won', () => {
    const prize = [{ id: 1, matches: [2, 2], prizeClass: 1, name: 'Test Prize' }]
    const lotteryName = 'Test Lottery'
    const matches = [[1, 2, 3]]
    const pools = [{ label: 'Main', length: 3, min: 1, max: 55 }]

    printResults(prize, lotteryName, matches, pools)
    expect(logMock).toHaveBeenCalledWith(
      `This ticket won prize class 1 with the name Test Prize in the ${lotteryName} lottery.`,
    )
    expect(logMock).toHaveBeenCalledWith(`Matched the numbers 1, 2, 3 from pool Main`)
  })

  it('should return nothing', () => {
    const prize = [{ id: 1, matches: [2, 2], prizeClass: 1, name: 'Test Prize' }]
    const lotteryName = 'Test Lottery'
    const matches = [[1, 2, 3]]
    const pools = [{ label: 'Main', length: 3, min: 1, max: 55 }]

    const result = printResults(prize, lotteryName, matches, pools)
    expect(result).toBeUndefined()
  })
})
