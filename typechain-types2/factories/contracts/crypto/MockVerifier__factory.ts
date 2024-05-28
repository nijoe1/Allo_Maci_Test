/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockVerifier,
  MockVerifierInterface,
} from "../../../contracts/crypto/MockVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[8]",
        name: "",
        type: "uint256[8]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point",
            name: "alpha1",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "beta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "gamma2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "x",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2]",
                name: "y",
                type: "uint256[2]",
              },
            ],
            internalType: "struct Pairing.G2Point",
            name: "delta2",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct Pairing.G1Point[]",
            name: "ic",
            type: "tuple[]",
          },
        ],
        internalType: "struct SnarkCommon.VerifyingKey",
        name: "",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506103a2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806322b72c9414610030575b600080fd5b61004761003e36600461020f565b50600192915050565b604051901515815260200160405180910390f35b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156100945761009461005b565b60405290565b60405160a0810167ffffffffffffffff811182821017156100945761009461005b565b604051601f8201601f1916810167ffffffffffffffff811182821017156100e6576100e661005b565b604052919050565b600060405161010080820182811067ffffffffffffffff821117156101155761011561005b565b604052909150819083018481111561012c57600080fd5b835b8181101561014657803583526020928301920161012e565b50505092915050565b60006040828403121561016157600080fd5b610169610071565b9050813581526020820135602082015292915050565b600082601f83011261019057600080fd5b610198610071565b8060408401858111156101aa57600080fd5b845b818110156101c45780358452602093840193016101ac565b509095945050505050565b6000608082840312156101e157600080fd5b6101e9610071565b90506101f5838361017f565b8152610204836040840161017f565b602082015292915050565b600080600061014080858703121561022657600080fd5b85601f86011261023557600080fd5b61023f86866100ee565b935061010085013567ffffffffffffffff8082111561025d57600080fd5b908601906101e0828903121561027257600080fd5b61027a61009a565b610284898461014f565b815260406102948a8286016101cf565b602081818501526102a88c60c088016101cf565b838501526102b88c8888016101cf565b60608501526101c08601359650848711156102d257600080fd5b86860196508b601f8801126102e657600080fd5b86359550848611156102fa576102fa61005b565b610308818760051b016100bd565b86815260069690961b8701810195818101955091508b86111561032a57600080fd5b958601955b85871015610350576103418c8861014f565b8552958201959384019361032f565b506080830152509598959750505050610120939093013592505056fea26469706673582212204eea1d1ad7490e4574548078304f2db16851bb7cda824a5a6d55ee0ba05c7d3964736f6c63430008140033";

type MockVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVerifier__factory extends ContractFactory {
  constructor(...args: MockVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockVerifier__factory {
    return super.connect(runner) as MockVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVerifierInterface {
    return new Interface(_abi) as MockVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockVerifier {
    return new Contract(address, _abi, runner) as unknown as MockVerifier;
  }
}
