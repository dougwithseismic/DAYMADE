import { Draw } from '../types'

export const DAILY_FREE_DRAW: Draw = {
  name: 'DAILY_FREE',
  label: 'Daily Free Draw - Every Day at 12:00pm',
  pools: [
    {
      min: 1,
      max: 36,
      length: 6,
    },
  ],
  prizes: [
    { id: 0, prizeClass: 1, matches: [6], name: '£25 DAYMADE Credit' },
    { id: 0, prizeClass: 2, matches: [5], name: '5 Premium Entries' },
    { id: 0, prizeClass: 3, matches: [4], name: '4 Premium Entries' },
    { id: 0, prizeClass: 4, matches: [3], name: '3 Premium Entries' },
    { id: 0, prizeClass: 5, matches: [2], name: '2 Premium Entries' },
    { id: 0, prizeClass: 6, matches: [1], name: '1 Premium Entry' },
  ],
}
