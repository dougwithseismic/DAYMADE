import { Draw } from '../types'

export const DAYMADE_DRAW: Draw = {
  name: 'DAYMADE',
  label: 'DAYMADE Main Draw',
  pools: [
    {
      min: 1,
      max: 55,
      length: 4,
    },
    {
      min: 1,
      max: 10,
      length: 1,
      label: 'Bonus',
    },
  ],
  prizes: [
    { id: 0, prizeClass: 1, matches: [4, 1], name: 'DAYMAKER' },
    { id: 2, prizeClass: 2, matches: [4, 0], name: 'Diamond' },
    { id: 3, prizeClass: 3, matches: [3, 1], name: 'Platinum' },
    { id: 4, prizeClass: 4, matches: [3, 0], name: 'Gold' },
    { id: 5, prizeClass: 5, matches: [2, 1], name: 'Silver' },
    { id: 6, prizeClass: 6, matches: [2, 0], name: 'Bronze' },
    { id: 7, prizeClass: 7, matches: [1, 1], name: '£5 DAYMADE Credit' },
    { id: 8, prizeClass: 8, matches: [1, 0], name: '1 Premium Entry' },
  ],
}
