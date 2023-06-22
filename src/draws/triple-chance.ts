import { Draw } from '../types'

export const TRIPLE_CHANCE_DRAW: Draw = {
  name: 'TRIPLE_CHANCE',
  label: '3x3x3xfun?',
  pools: [
    {
      min: 1,
      max: 33,
      length: 3,
    },
    {
      min: 1,
      max: 33,
      length: 3,
    },
    {
      min: 1,
      max: 33,
      length: 3,
    },
  ],
  prizes: [
    {
      id: 0,
      prizeClass: 1,
      matches: [3, 3, 3],
      name: 'An Incredible Prize, Probably.',
    },
    {
      id: 0,
      prizeClass: 2,
      matches: [2, 2, 2],
      name: 'An Equally Solid Prize',
    },
    { id: 0, prizeClass: 4, matches: [1, 1, 1], name: 'Not bad. Not bad.' },

    // In matches, we could include a matchType and set other rules such as "at least 2" or "exactly 2", or other rules.
    // The way I've laid out this allows for extensibility in the future.
  ],
}
