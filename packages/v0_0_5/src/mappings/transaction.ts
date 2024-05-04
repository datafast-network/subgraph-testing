import { Address, Bytes, ethereum, log, BigInt } from '@graphprotocol/graph-ts'


export function testTransaction(tx: ethereum.TransactionReceipt): void {
  const logs = tx.logs
  const expectedAddr = Address.fromString('0x9FA7fC17A8d0151F6641a636cC734064E0C64093')
  const transferTopic = Bytes.fromHexString('0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
  for (let i = 0; i < logs.length; i++) {
    const logItem = logs[i]
    if (logItem.topics[0] == transferTopic) {
      const from = Address.fromHexString(logItem.topics[1].toHexString())
      const to = Address.fromHexString(logItem.topics[2].toHexString())
      const address = [from, to]
      if (!address.includes(expectedAddr)) {
        continue
      }

      const value = BigInt.fromSignedBytes(logItem.data)
      log.info(`Event Transfer from: ${from.toHexString()} to: ${to.toHexString()} value: ${value.toString()}`, [])
    }
  }

}