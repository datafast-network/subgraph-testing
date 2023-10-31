import { BigInt } from '@graphprotocol/graph-ts'
import { Token } from '../types/schema'
import { ZERO_BI, ZERO_BD } from './../utils/constants'

export function testStoreSet(): void {
  let token = new Token('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
  token.symbol = fetchTokenSymbol(event.params.token)
  token.name = fetchTokenName(event.params.token)
  token.totalSupply = BigInt.fromString('1000000000000')
  token.decimals = 10
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
  return token
}
