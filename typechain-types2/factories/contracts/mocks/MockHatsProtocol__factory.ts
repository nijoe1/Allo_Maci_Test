/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../common";
import type {
  MockHatsProtocol,
  MockHatsProtocolInterface,
} from "../../../contracts/mocks/MockHatsProtocol";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_hats",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_admin",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "uint32",
        name: "_maxSupply",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_eligibility",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toggle",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_mutable",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_imageURI",
        type: "string",
      },
    ],
    name: "createHat",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hats",
    outputs: [
      {
        internalType: "contract IHats",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "hat",
        type: "uint256",
      },
    ],
    name: "isWearerOfHat",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastHat",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTopHat",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hatId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_wearer",
        type: "address",
      },
    ],
    name: "mintHat",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
      {
        internalType: "string",
        name: "_imageURI",
        type: "string",
      },
    ],
    name: "mintTopHat",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040526040516107a93803806107a983398101604081905261002291610033565b6001600160a01b0316608052610063565b60006020828403121561004557600080fd5b81516001600160a01b038116811461005c57600080fd5b9392505050565b60805161070f61009a600039600081816101080152818161015c01528181610214015281816102b10152610316015261070f6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063641f776e1161005b578063641f776e146100d457806379a108e6146100e7578063b052925e146100f0578063f99f02381461010357600080fd5b80631a64dfad146100825780631d71c7db146100a85780634352409a146100b1575b600080fd5b610095610090366004610416565b610142565b6040519081526020015b60405180910390f35b61009560005481565b6100c46100bf366004610497565b6101eb565b604051901515815260200161009f565b6100c46100e23660046104c1565b610288565b61009560015481565b6100956100fe3660046104fe565b6102fc565b61012a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161009f565b604051631a64dfad60e01b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631a64dfad9061019990899089908990899089906004016105f7565b6020604051808303816000875af11580156101b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dc919061063b565b60008190559695505050505050565b6040516321a9204d60e11b81526001600160a01b038381166004830152602482018390526000917f000000000000000000000000000000000000000000000000000000000000000090911690634352409a90604401602060405180830381865afa15801561025d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102819190610654565b9392505050565b60405163320fbbb760e11b8152600481018390526001600160a01b0382811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063641f776e906044016020604051808303816000875af115801561025d573d6000803e3d6000fd5b604051635829492f60e11b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b052925e9061035b908d908d908d908d908d908d908d908d908d90600401610671565b6020604051808303816000875af115801561037a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039e919061063b565b60018190559a9950505050505050505050565b80356001600160a01b03811681146103c857600080fd5b919050565b60008083601f8401126103df57600080fd5b50813567ffffffffffffffff8111156103f757600080fd5b60208301915083602082850101111561040f57600080fd5b9250929050565b60008060008060006060868803121561042e57600080fd5b610437866103b1565b9450602086013567ffffffffffffffff8082111561045457600080fd5b61046089838a016103cd565b9096509450604088013591508082111561047957600080fd5b50610486888289016103cd565b969995985093965092949392505050565b600080604083850312156104aa57600080fd5b6104b3836103b1565b946020939093013593505050565b600080604083850312156104d457600080fd5b823591506104e4602084016103b1565b90509250929050565b80151581146104fb57600080fd5b50565b600080600080600080600080600060e08a8c03121561051c57600080fd5b8935985060208a013567ffffffffffffffff8082111561053b57600080fd5b6105478d838e016103cd565b909a50985060408c0135915063ffffffff8216821461056557600080fd5b81975061057460608d016103b1565b965061058260808d016103b1565b955060a08c01359150610594826104ed565b90935060c08b013590808211156105aa57600080fd5b506105b78c828d016103cd565b915080935050809150509295985092959850929598565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038616815260606020820181905260009061061c90830186886105ce565b828103604084015261062f8185876105ce565b98975050505050505050565b60006020828403121561064d57600080fd5b5051919050565b60006020828403121561066657600080fd5b8151610281816104ed565b89815260e06020820152600061068b60e083018a8c6105ce565b63ffffffff891660408401526001600160a01b0388811660608501528716608084015285151560a084015282810360c08401526106c98185876105ce565b9c9b50505050505050505050505056fea2646970667358221220814184f5ea3ea23f0d1fc7f404d5511d0d2e533f1b20e07a1115ef5c172e501e64736f6c63430008140033";

type MockHatsProtocolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockHatsProtocolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockHatsProtocol__factory extends ContractFactory {
  constructor(...args: MockHatsProtocolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _hats: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_hats, overrides || {});
  }
  override deploy(
    _hats: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_hats, overrides || {}) as Promise<
      MockHatsProtocol & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockHatsProtocol__factory {
    return super.connect(runner) as MockHatsProtocol__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockHatsProtocolInterface {
    return new Interface(_abi) as MockHatsProtocolInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockHatsProtocol {
    return new Contract(address, _abi, runner) as unknown as MockHatsProtocol;
  }
}
