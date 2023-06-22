import { Pool } from '../types'

/**
 * Function to validate ticket.
 * @param poolTicket - Pool ticket number list
 * @param pools - Pool list
 * @returns boolean - Is ticket valid or not
 */
export const validateTicket = (poolTicket: number[][], pools: Pool[]): boolean => {
  const fitsMinMax = poolTicket.every((pool, i) => {
    const poolConfig = pools[i]
    return pool.every((number) => {
      const isNumberValid = number >= poolConfig.min && number <= poolConfig.max
      return isNumberValid
    })
  })

  const hasCorrectLength = poolTicket.every((pool, i) => {
    const poolConfig = pools[i]
    return pool.length === poolConfig.length
  })

  const hasNoDuplicates = poolTicket.every((pool, i) => {
    const dedupedPool = [...new Set(pool)]
    return pool.length === dedupedPool.length
  })

  const isValid = fitsMinMax && hasCorrectLength && hasNoDuplicates
  return isValid ? true : false
}
