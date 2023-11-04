import {log, BigInt, bigDecimal, Bytes, BigDecimal, ethereum, JSONValue, Address, Wrapped} from '@graphprotocol/graph-ts'

export function testLog(): void {
    log.debug(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
        []
    )
    log.info(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
        []
    )
    log.warning(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
        []
    )
    log.error(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
        []
    )
    log.critical(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
        []
    )
}

export function testBigIntPlus(): BigInt {
    let x = BigInt.fromI32(1000)
    let y = BigInt.fromI32(2000)
    return x.plus(y)
}

export function testBigIntMinus(): BigInt {
    let x = BigInt.fromI32(1000)
    let y = BigInt.fromI32(2000)
    return x.minus(y)
}

export function testBigIntTimes(): BigInt {
    let x = BigInt.fromI32(1000)
    let y = BigInt.fromI32(2000)
    return x.times(y)
}

export function testBigIntDividedBy(): BigInt {
    let x1 = BigInt.fromI32(1)
    let y1 = BigInt.fromI32(2)
    let div1 = x1.div(y1) // = 0

    let x2 = BigInt.fromI32(10)
    let y2 = BigInt.fromI32(2)
    let div2 = x2.div(y2) //= 5

    let x3 = BigInt.fromI32(2)
    let y3 = BigInt.fromI32(2)
    let div3 = x3.div(y3) //= 1

    let x4 = BigInt.fromI32(-10)
    let y4 = BigInt.fromI32(10)
    let div4 = x4.div(y4) //= -1

    let x5 = BigInt.fromI32(10)
    let y5 = BigInt.fromI32(-20)
    let div5 = x5.div(y5) //= 0

    let x6 = BigInt.fromI32(9)
    let y6 = BigInt.fromI32(8)
    let div6 = x5.div(y6) //= 1

    return div1
        .plus(div2)
        .plus(div3)
        .plus(div4)
        .plus(div5)
        .plus(div6) //= 6
}

export function testBigIntPow(): BigInt {
    let x = BigInt.fromI32(100)
    let pow1 = x.pow(10)
    let x2 = BigInt.fromI32(100)
    let pow2 = x2.pow(0)
    return pow1.plus(pow2)
}

export function testBigIntMod(): BigInt {
    let x1 = BigInt.fromI32(20)
    let y1 = BigInt.fromI32(15)
    let mod1 = x1.mod(y1) // 5
    let x2 = BigInt.fromI32(20)
    let y2 = BigInt.fromI32(9)
    let mod2 = x2.mod(y2) // 2
    let x3 = BigInt.fromI32(20)
    let y3 = BigInt.fromI32(-9)
    let mod3 = x3.mod(y3) // 2
    return mod1.plus(mod2).plus(mod3)
}

export function testBigIntLeftShift(): BigInt {
    let x = BigInt.fromI32(1000)
    return x.leftShift(10)
}

export function testBigIntRightShift(): BigInt {
    let x = BigInt.fromI32(1000)
    return x.rightShift(10)
}

export function testBigIntBitOr(): BigInt {
    let x = BigInt.fromI32(1000)
    let y = BigInt.fromI32(2000)
    return x.bitOr(y)
}

export function testBigIntBitAnd(): BigInt {
    let x = BigInt.fromI32(1000)
    let y = BigInt.fromI32(2000)
    return x.bitAnd(y)
}

export function testBigIntFromString(): BigInt {
    return BigInt.fromString('1000')
}

export function testBigIntToString(): string {
    return BigInt.fromI32(1000).toString()
}

export function testBigIntToHex(): string {
    return BigInt.fromI32(1000).toHex()
}

export function testBigIntDividedByDecimal(): BigDecimal {
    let x = BigInt.fromI32(1000)
    let y = BigDecimal.fromString('2000')
    return x.divDecimal(y)
}

export function testBigDecimalPlus(): BigDecimal {
    let x = BigDecimal.fromString('1000')
    let y = BigDecimal.fromString('2000')
    return x.plus(y)
}

export function testBigDecimalMinus(): BigDecimal {
    let x = BigDecimal.fromString('1000')
    let y = BigDecimal.fromString('2000')
    return x.minus(y)
}

export function testBigDecimalTimes(): BigDecimal {
    let x = BigDecimal.fromString('1000')
    let y = BigDecimal.fromString('2000')
    return x.times(y)
}

export function testBigDecimalDividedBy(): BigDecimal {
    let x = BigDecimal.fromString('1000')
    let y = BigDecimal.fromString('2000')
    return x.div(y)
}

export function testBigDecimalFromString(): BigDecimal {
    return BigDecimal.fromString('1000')
}

export function testBigDecimalToString(): string {
    let y = BigDecimal.fromString('1000')
    return y.toString()
}

export function testBigDecimalEquals(): boolean {
    let x = BigDecimal.fromString('1000')
    let y = BigDecimal.fromString('1000')
    let value = bigDecimal.equals(x, y)
    log.info('should true => testBigDecimalEquals: {}', [value.toString()])
    let x2 = BigDecimal.fromString('2000')
    let y2 = BigDecimal.fromString('1000')
    let value2 = bigDecimal.equals(x2, y2)
    log.info('should false => testBigDecimalEquals: {}', [value2.toString()])
    return value
}

export function testBytesToString(): string {
    let txHash = Bytes.fromUTF8('abc')
    log.info('testBytesToString: {}', [txHash.toString()])
    return txHash.toString()
}

export function testBytesToHex(): string {
    let bytes = Bytes.fromUTF8('abc')
    return bytes.toHex()
}

export function testHexToBytes(): string {
    let bytes = Bytes.fromHexString('0x616263')
    return bytes.toString()
}

export function testBytesToBase58(): string {
    let bytes = Bytes.fromUTF8('abc')
    return bytes.toBase58()
}

export function testEthereumBlock(
    block: ethereum.Block,
    transaction: ethereum.Transaction,
    event: ethereum.Event
): string {
    let blockNumber = block.number.toString()
    let txHash = transaction.hash.toHexString()
    let eventAddress = event.address.toHexString()
    let jointStr = `block_number=${blockNumber}, tx_hash=${txHash}, event_address=${eventAddress}`
    return jointStr
}

export function transformEthereumBlock(value: JSONValue): ethereum.Block {
    let block = value.toObject();
    let header = block.get('header')!.toObject();
    return new ethereum.Block(
        Bytes.fromHexString(block.get('block_hash')!.toString()),
        Bytes.fromHexString(block.get('parent_hash')!.toString()),
        Bytes.fromHexString("0x0000000000000000000000000000000000000000000000000000000000000000"),//unclesHash không có trong block cho về 66 bytes 0
        Address.fromString(header.get('author')!.toString()),
        Bytes.fromHexString(header.get('state_root')!.toString()),
        Bytes.fromHexString(header.get('transactions_root')!.toString()),
        Bytes.fromHexString(header.get('receipts_root')!.toString()),
        block.get('block_number')!.toBigInt(),
        BigInt.fromString(header.get('gas_used')!.toString()),
        BigInt.fromString(header.get('gas_limit')!.toString()),
        BigInt.fromString(header.get('timestamp')!.toString()),
        BigInt.fromString(header.get('difficulty')!.toString()),
        BigInt.fromString(header.get('total_difficulty')!.toString()),
        header.get('size') ? header.get('size')!.toBigInt() : null,
        header.get('base_fee_per_gas')!.isNull() ? null : BigInt.fromString(header.get('base_fee_per_gas')!.toString()),
    )
}

export function transformEthereumTxs(value: JSONValue): Array<ethereum.Transaction> {
    let transactions = value.toArray();
    let txs: Array<ethereum.Transaction> = []
    for (let i = 0; i < transactions.length; i++) {
        let tx = transactions[i].toObject();
        let eth_tx = new ethereum.Transaction(
            Bytes.fromHexString(tx.get('hash')!.toString()),
            BigInt.fromU64(i),
            Address.fromString(tx.get('from')!.toString()),
            tx.get('to')!.isNull() ? null : Address.fromString(tx.get('to')!.toString()),
            BigInt.fromString(tx.get('value')!.toString()),
            BigInt.fromString("0"),//gasLimit không có trong transaction cho về 0
            BigInt.fromString(tx.get('gas_price')!.toString()),
            Bytes.fromHexString(tx.get('input')!.toString()),
            tx.get('nonce')!.toBigInt(),
        );
        txs.push(eth_tx)
    }
    return txs
}

export function transformEthereumLog(value: JSONValue): Array<ethereum.Log> {
    let logs = value.toArray();
    let ethLogs: Array<ethereum.Log> = []
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i].toObject();
        let ethLog = new ethereum.Log(
            Address.fromString(log.get('address')!.toString()),
            log.get('topics')!.toArray().map<Bytes>((value: JSONValue) => Bytes.fromHexString(value.toString())),
            Bytes.fromHexString(log.get('data')!.toString()),
            Bytes.fromHexString(log.get('block_hash')!.toString()),
            Bytes.fromHexString(log.get('block_number')!.toBigInt().toHex()),
            Bytes.fromHexString(log.get('transaction_hash')!.toString()),
            log.get('transaction_index')!.toBigInt(),
            log.get('log_index')!.toBigInt(),
            log.get('transaction_log_index')!.isNull() ? BigInt.fromI32(0) : log.get('transaction_log_index')!.toBigInt(),
            log.get('log_type')!.isNull() ? '' : log.get('log_type')!.toString(),
            log.get('removed')!.isNull() ? new Wrapped(false) : new Wrapped(log.get('removed')!.toBool()),
        );
        ethLogs.push(ethLog)
    }
    return ethLogs

}

export function testAll(): void {
    testLog()
    testBigIntPlus()
    testBigIntMinus()
    testBigIntTimes()
    testBigIntDividedBy()
    testBigIntPow()
    testBigIntMod()
    testBigIntDividedByDecimal()
    testBigIntLeftShift()
    testBigIntRightShift()
    testBigIntBitOr()
    testBigIntBitAnd()
    testBigIntFromString()
    testBigIntToString()
    testBigIntToHex()
    testBigDecimalPlus()
    testBigDecimalMinus()
    testBigDecimalTimes()
    testBigDecimalDividedBy()
    testBigDecimalFromString()
    testBigDecimalToString()
    testBigDecimalEquals()
    testBytesToHex()
    testBytesToString()
    testHexToBytes()
    testBytesToBase58()
}
