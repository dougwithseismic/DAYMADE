import generateRandomTicket from './utility/generate-random-ticket'
import { processTicket } from './winning-calculator'

console.log('A Winning DAYMADE Ticket')
processTicket('DAYMADE', [3, 7, 22, 34, 4], [3, 10, 22, 35, 4])
console.log('---------')

console.log('An invalid Ticket Example')
try {
  processTicket('DAILY_FREE', [3, 7, 34, 4], [3, 10, 90, 35, 4])
} catch (error: any) {
  console.log(`Invalid ticket for the DAILY_FREE draw.`, error.message)
}
console.log('---------')

console.log('NEW: A new Triple Chance draw that has 3 pools to match.')
processTicket('TRIPLE_CHANCE', [3, 7, 22, 33, 4, 2, 23, 11, 20], [3, 7, 21, 33, 4, 9, 22, 11, 20])
console.log('---------')

// loop through 30 times to call generateRandomTicket and process it.

let counter = 0
while (counter <= 150) {
  const ticket = generateRandomTicket()
  processTicket(ticket.prizeDraw, ticket.result, ticket.ticket)
  counter ++
  console.log("------------------")
}
