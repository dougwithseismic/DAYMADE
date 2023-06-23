import { PrizeDrawName, ResultType } from './types'
import { processTicket } from './winning-calculator'

// Retrieve command-line arguments
const [, , ...args] = process.argv
if (args.length !== 3) throw new Error('Invalid number of arguments')

const results = args[1].split(',').map((num: string) => parseInt(num)) as ResultType
const ticket = args[2].split(',').map((num: string) => parseInt(num)) as ResultType

// Call the processTicket function with the arguments
processTicket(args[0] as PrizeDrawName, results, ticket)
