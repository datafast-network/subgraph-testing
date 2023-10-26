import { log, BigInt } from '@graphprotocol/graph-ts'

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
}