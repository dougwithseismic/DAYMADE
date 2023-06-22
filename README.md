# DAYMADE Coding Challenge

When building games at DAYMADE, determining which tickets win which
prizes is absolutely mission critical. Awarding the wrong prize for a ticket
could prove to be very expensive for the business or lead to some very
annoyed customers!

Your task is to write a command line Node.js program that can determine
which prize a ticket wins given the code name of a lottery, the winning
numbers for a draw in that lottery and the numbers on a single ticket that
entered into that lottery.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dougwithseismic/daymade-coding-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd daymade-coding-challenge
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Demo Command

The `demo` command showcases some functionality of the project. To run the command, execute the following in the terminal:

```bash
npm run demo

A Winning DAYMADE Ticket
Processing ticket [ [ 3, 10, 22, 35 ], [ 4 ] ] for draw DAYMADE with results [ [ 3, 7, 22, 34 ], [ 4 ] ]
This ticket won prize class 5 with the name Silver in the DAYMADE lottery.
Matched the numbers 3, 22 from pool 1 and Matched the numbers 4 from pool Bonus
---------
An invalid Ticket Example
Invalid ticket for the DAYMADE draw. Ticket length (4) does not match total pool length (5)
---------
NEW: A new Triple Chance draw that has 3 pools to match.
Processing ticket [ [ 3, 7, 21 ], [ 33, 4, 9 ], [ 22, 11, 20 ] ] for draw TRIPLE_CHANCE with results [ [ 3, 7, 22 ], [ 33, 4, 2 ], [ 23, 11, 20 ] ]
This ticket won prize class 2 with the name An Equally Solid Prize in the TRIPLE_CHANCE lottery.
Matched the numbers 3, 7 from pool 1 and Matched the numbers 33, 4 from pool 2 and Matched the numbers 11, 20 from pool 3
---------
```

## Process Ticket Command

The `cmd-line` script processes tickets based on command-line arguments. To run the command, use the following format:

```bash
npm run cmd-line -- "DAYMADE" "3,7,22,34,4" "3,10,22,35,4"
npm run cmd-line -- "DAILY_FREE" "3,7,22,34,4" "3,10,22,35,4"
npm run cmd-line -- "TRIPLE_CHANCE" "3,7,22,34,4" "3,10,22,35,4"

Processing ticket for DAYMADE
--------------------
isTicketValid :>>  true
resultsByPools :>>  [ [ 3, 7, 22, 34 ], [ 4 ] ]
ticketByPools :>>  [ [ 3, 10, 22, 35 ], [ 4 ] ]
This ticket won prize class 5 with the name Silver in the DAYMADE lottery.
Matched the numbers 3, 22 from pool 1 and Matched the numbers 4 from pool Bonus
```

This command will  execute the `cmd-line.ts` script with the provided command-line arguments.

## Code Decisions and Extensibility

### TypeScript

The project uses TypeScript to take advantage of static typing and better developer tooling. It provides type safety and improved code maintainability, which is feels very much like bowling with the sides up; empowered code completion everywhere. It's especially important that we lay the groundwork for new hires with Type safety, and it makes life easier with no hassle
