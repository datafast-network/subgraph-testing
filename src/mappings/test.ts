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

    return div1.plus(div2).plus(div3).plus(div4).plus(div5).plus(div6) //= 6
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

export function testBigIntShiftLeft(): BigInt {
    let x = BigInt.fromI32(1000)
    return x.leftShift(10)
}

export function testBigIntShiftRight(): BigInt {
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
    return x.equals(y)
}

export function bytesToString(): string {
    let txHash = ByteArray.fromHexString("0x25b1f7de5e6b8020f8dbb210f4a095727f63e58c8267f95c2de334957bbf20b8")
    return txHash.toString()
}

export function bytesToHex(): string {
    let txHash = ByteArray.fromHexString("0x25b1f7de5e6b8020f8dbb210f4a095727f63e58c8267f95c2de334957bbf20b8")
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
    testBigIntDividedByDecimal()
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