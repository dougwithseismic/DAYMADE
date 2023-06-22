import { v4 as uuidv4 } from 'uuid'
import draws from './draws'

export interface Pool {
  min: number
  max: number
  length: number
  label?: string
}

export interface Draw {
  name: PrizeDrawName
  label: string
  pools: Pool[]

  prizes: Prize[]
}

export interface Prize {
  id: typeof uuidv4 | number
  prizeClass: number
  matches: number[]
  name: string
}
export type TicketType = number[]
export type ResultType = number[]

type PrizeDrawStructure = typeof draws
export type PrizeDrawName = keyof PrizeDrawStructure
