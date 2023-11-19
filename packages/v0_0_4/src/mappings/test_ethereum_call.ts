import { Address, log } from '@graphprotocol/graph-ts'
import { ERC20 } from '../types/ethereum_call/ERC20'

export function testEthereumCall(): void {
  let tokenAddress = Address.fromString('0x95a41fb80ca70306e9ecf4e51cea31bd18379c18')
  let contractSymbolBytes = ERC20.bind(tokenAddress)
  let symbolResultBytes = contractSymbolBytes.symbol()
  log.info('symbolResultBytes={}', [symbolResultBytes])
}
