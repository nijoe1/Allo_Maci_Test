/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  SignUpGatekeeper,
  SignUpGatekeeperInterface,
} from "../../../contracts/gatekeepers/SignUpGatekeeper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_maci",
        type: "address",
      },
    ],
    name: "setMaciInstance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class SignUpGatekeeper__factory {
  static readonly abi = _abi;
  static createInterface(): SignUpGatekeeperInterface {
    return new Interface(_abi) as SignUpGatekeeperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SignUpGatekeeper {
    return new Contract(address, _abi, runner) as unknown as SignUpGatekeeper;
  }
}