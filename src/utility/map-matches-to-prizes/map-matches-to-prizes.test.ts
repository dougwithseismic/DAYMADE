import { Pool, PrizeDrawName } from '../../types'
import { mapMatchesToPrizes } from './map-matches-to-prizes'

describe('mapMatchesToPrizes', () => {
  it('should return null when there are no matched prizes', () => {
    const matches = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const draw = {
      name: 'DAYMADE' as PrizeDrawName,
      label: 'Test Draw',
      pools: [{ label: 'Main', length: 3 }] as Pool[],
      prizes: [
        {
          id: 1,
          prizeClass: 1,
          matches: [4],
          name: 'No Prize',
        },
      ],
    }

    const result = mapMatchesToPrizes(matches, draw)
    expect(result).toBeNull()
  })

  it('should return matched prizes when there are matches', () => {
    const matches = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const draw = {
      name: 'DAYMADE' as PrizeDrawName,
      label: 'DAYMADE Test',
      pools: [{ label: 'Main', length: 3 }] as Pool[],
      prizes: [
        {
          id: 1,
          prizeClass: 1,
          matches: [3],
          name: 'Test Prize',
        },
      ],
    }

    const result = mapMatchesToPrizes(matches, draw)
    expect(result).toEqual([
      {
        id: 1,
        prizeClass: 1,
        matches: [3],
        name: 'Test Prize',
      },
    ])
  })
})
