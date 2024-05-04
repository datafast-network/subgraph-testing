import {Address, BigInt, Bytes, ethereum, JSONValue, log, Wrapped} from "@graphprotocol/graph-ts";
import {Transfer} from "../types/Ingestor/ERC20";

const WhiteList = new Array<string>(0);

export class EthereumFullBlock {
    constructor(
        public hash: Bytes,
        public parentHash: Bytes,
        public number: BigInt,
        public header: ethereum.Block,
        public transactions: Array<ethereum.Transaction>,
        public logs: Array<ethereum.Log>
    ) {
    }
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

export function transformEthereumTx(value: JSONValue, index: string): ethereum.Transaction {
    let tx = value.toObject();
    return new ethereum.Transaction(
        Bytes.fromHexString(tx.get('hash')!.toString()),
        BigInt.fromString(index),
        Address.fromString(tx.get('from_address')!.toString()),
        tx.get('to_address')!.isNull() ? null : Address.fromString(tx.get('to_address')!.toString()),
        BigInt.fromString(tx.get('value')!.toString()),
        BigInt.fromString("0"),//gasLimit không có trong transaction cho về 0
        BigInt.fromString(tx.get('gas_price')!.toString()),
        Bytes.fromHexString(tx.get('input')!.toString()),
        tx.get('nonce')!.toBigInt(),
    )
}

export function transformEthereumTxs(value: JSONValue): Array<ethereum.Transaction> {
    let block = value.toObject();
    let transactions = block.get('transactions')!.toArray();
    let txs: Array<ethereum.Transaction> = []
    for (let i = 0; i < transactions.length; i++) {
        txs.push(this.transformEthereumTx(transactions[i], `${i}`))
    }
    return txs
}

export function transformEthereumLog(value: JSONValue): ethereum.Log {
    let logData = value.toObject();
    return new ethereum.Log(
        Address.fromString(logData.get('address')!.toString()),
        logData.get('topics')!.toArray().map<Bytes>((value: JSONValue) => Bytes.fromHexString(value.toString())),
        Bytes.fromHexString(logData.get('data')!.toString()),
        Bytes.fromHexString(logData.get('block_hash')!.toString()),
        Bytes.fromHexString(logData.get('block_number')!.toBigInt().toHex()),
        Bytes.fromHexString(logData.get('transaction_hash')!.toString()),
        logData.get('transaction_index')!.toBigInt(),
        logData.get('log_index')!.toBigInt(),
        logData.get('transaction_log_index')!.isNull() ? BigInt.fromI32(0) : logData.get('transaction_log_index')!.toBigInt(),
        logData.get('log_type')!.isNull() ? '' : logData.get('log_type')!.toString(),
        logData.get('removed')!.isNull() ? new Wrapped(false) : new Wrapped(logData.get('removed')!.toBool()),
    );
}

export function transformEthereumLogs(value: JSONValue): Array<ethereum.Log> {
    let block = value.toObject();
    let logs = block.get("logs")!.toArray();
    let ethLogs: Array<ethereum.Log> = []
    for (let i = 0; i < logs.length; i++) {
        ethLogs.push(this.transformEthereumLog(logs[i]))
    }
    return ethLogs

}

export function transformFullBlock(value: JSONValue): EthereumFullBlock {
    let fullBlock = value.toObject();
    let header = this.transformEthereumBlock(value);
    let txs = this.transformEthereumTxs(fullBlock.get("transactions")!);
    let logs = this.transformEthereumLogs(fullBlock.get("logs")!);
    return new EthereumFullBlock(
        header.hash,
        header.parentHash,
        header.number,
        header,
        txs,
        logs
    )
}
export function handleTransfer(event: Transfer): void {
    log.info(`>>>>>> Handle transfer {}`, [event.address.toHex()])
}