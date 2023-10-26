import {log, BigInt, BigDecimal, ByteArray} from '@graphprotocol/graph-ts'

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
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
    return x.plus(y)
}

export function testBigIntMinus(): BigInt {
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
    return x.minus(y)
}

export function testBigIntTimes(): BigInt {
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
    return x.times(y)
}

export function testBigIntDividedBy(): BigInt {
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
    return x.div(y)
}

export function testBigIntPow(): BigInt {
    const x = BigInt.fromI32(1000)
    return x.pow(10)
}

export function testBigIntMod(): BigInt {
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
    return x.mod(y)
}

export function testBigIntShiftLeft(): BigInt {
    const x = BigInt.fromI32(1000)
    return x.leftShift(10)
}

export function testBigIntShiftRight(): BigInt {
    const x = BigInt.fromI32(1000)
    return x.rightShift(10)
}

export function testBigIntBitOr(): BigInt {
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
    return x.bitOr(y)
}

export function testBigIntBitAnd(): BigInt {
    const x = BigInt.fromI32(1000)
    const y = BigInt.fromI32(2000)
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



export function testBigDecimalPlus(): BigDecimal {
    const x = BigDecimal.fromString('1000')
    const y = BigDecimal.fromString('2000')
    return x.plus(y)
}

export function testBigDecimalMinus(): BigDecimal {
    const x = BigDecimal.fromString('1000')
    const y = BigDecimal.fromString('2000')
    return x.minus(y)
}

export function testBigDecimalTimes(): BigDecimal {
    const x = BigDecimal.fromString('1000')
    const y = BigDecimal.fromString('2000')
    return x.times(y)
}

export function testBigDecimalDividedBy(): BigDecimal {
    const x = BigDecimal.fromString('1000')
    const y = BigDecimal.fromString('2000')
    return x.div(y)
}

export function testBigDecimalFromString(): BigDecimal {
    return BigDecimal.fromString('1000')
}

export function testBigDecimalToString(): string {
    const y = BigDecimal.fromString('1000')
    return y.toString()
}

export function testBigDecimalEquals(): boolean {
    const x = BigDecimal.fromString('1000')
    const y = BigDecimal.fromString('1000')
    return x.equals(y)
}

export function bytesToString(): string {
    const txHash = ByteArray.fromHexString("0x25b1f7de5e6b8020f8dbb210f4a095727f63e58c8267f95c2de334957bbf20b8")
    return txHash.toString()
}

export function bytesToHex(): string {
    const txHash = ByteArray.fromHexString("0x25b1f7de5e6b8020f8dbb210f4a095727f63e58c8267f95c2de334957bbf20b8")
    return txHash.toHex()
}


export function testAll(): void {
    testLog()
    testBigIntPlus()
    testBigIntMinus()
    testBigIntTimes()
    testBigIntDividedBy()
    testBigIntPow()
    testBigIntMod()
    testBigIntShiftLeft()
    testBigIntShiftRight()
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
    bytesToString()
    bytesToHex()
}