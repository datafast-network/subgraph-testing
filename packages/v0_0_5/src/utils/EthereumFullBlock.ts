import {Bytes} from "@graphprotocol/graph-ts/common/collections";
import {BigInt } from '@graphprotocol/graph-ts/common/numbers';
import {ethereum} from "@graphprotocol/graph-ts";
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