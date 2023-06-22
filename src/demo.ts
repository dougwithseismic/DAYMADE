import { processTicket } from './winning-calculator'

console.log('A Winning DAYMADE Ticket')
processTicket('DAYMADE', [3, 7, 22, 34, 4], [3, 10, 22, 35, 4])
console.log('---------')

console.log('An invalid Ticket Example')
try {
  processTicket('DAYMADE', [3, 7, 34, 4], [3, 10, 90, 35, 4])
} catch (error: any) {
  console.log(`Invalid ticket for the DAYMADE draw.`, error.message)
}
console.log('---------')

console.log('NEW: A new Triple Chance draw that has 3 pools to match.')
processTicket('TRIPLE_CHANCE', [3, 7, 22, 33, 4, 2, 23, 11, 20], [3, 7, 21, 33, 4, 9, 22, 11, 20])
console.log('---------')
