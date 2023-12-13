/* eslint-disable prefer-const */

import { BigInt, BigDecimal, Address, log } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/Factory/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export function testGlobalVar(): void {
  log.info('----------> Address Zero {}', [ADDRESS_ZERO])
  log.info('----------> Factory Address {}', [FACTORY_ADDRESS])
  log.info('----------> ZERO_BI={}, ONE_BI={}', [ZERO_BI.toString(), ONE_BI.toString()])
  log.info('----------> ZERO_BD={}, ONE_BD={}', [ZERO_BD.toString(), ONE_BD.toString()])
  log.info('----------> BI_18={}', [BI_18.toString()])
  return
}
