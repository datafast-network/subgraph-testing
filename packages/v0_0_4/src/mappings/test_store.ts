import { BigInt, BigDecimal } from '@graphprotocol/graph-ts'
import { Token } from '../types/schema'

export function testStoreSet(): void {
  let ZERO_BI = BigInt.fromI32(0)
  let ONE_BI = BigInt.fromI32(1)
  let ZERO_BD = BigDecimal.fromString('0')
  let ONE_BD = BigDecimal.fromString('1')
  let BI_18 = BigInt.fromI32(18)
  
  let token = new Token('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
  token.symbol = "MYCOIN"
  token.name = "MyCoin"
  token.totalSupply = BigInt.fromString('1000000000000')
  token.decimals = BigInt.fromI32(10)
  token.derivedETH = ZERO_BD
  token.volume = ZERO_BD
  token.volumeUSD = ZERO_BD
  token.untrackedVolumeUSD = ZERO_BD
  token.feesUSD = ZERO_BD
  token.totalValueLocked = ZERO_BD
  token.totalValueLockedUSD = ZERO_BD
  token.totalValueLockedUSDUntracked = ZERO_BD
  token.txCount = ZERO_BI
  token.poolCount = ZERO_BI
  token.whitelistPools = []
  token.save()
}

export function testStoreGet(): Token {
  let token = Token.load('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
  return token!
}
