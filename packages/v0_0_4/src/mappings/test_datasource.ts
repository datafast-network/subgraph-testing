import { ethereum, log } from '@graphprotocol/graph-ts'

export function testHandlerEvent(event: ethereum.Event): void {
  log.info("Received event: {}", [event.address.toHexString()]);
}

export function testHandlerBlock(block: ethereum.Block): void {
  log.info("Received block: {}, hash={}", [block.number.toString(), block.hash.toHexString()]);
}
