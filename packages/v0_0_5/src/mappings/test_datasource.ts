import { ethereum, log } from '@graphprotocol/graph-ts'

export function testHandlerEvent(event: ethereum.Event): void {
  log.info('Received event: address={}, block={}', [event.address.toHexString(), event.block.number.toString()])
}

export function testHandlerBlock(block: ethereum.Block): void {
  log.info('Received block: {}, hash={}', [block.number.toString(), block.hash.toHexString()])
}

export function testHandlerTransaction(tx: ethereum.Transaction): void {
  log.info('Received tx: from={}, to={}, value={}', [tx.from.toHexString(), tx.to!.toHexString(), tx.value.toString()])
}

export function testHandlerLog(ethLog: ethereum.Log): void {
  log.info('Received log: data={}', [ethLog.data.toHexString()])
}
