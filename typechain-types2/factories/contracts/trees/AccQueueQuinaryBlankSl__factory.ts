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
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AccQueueQuinaryBlankSl,
  AccQueueQuinaryBlankSlInterface,
} from "../../../contracts/trees/AccQueueQuinaryBlankSl";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_subDepth",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DepthCannotBeZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
    ],
    name: "DepthTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min",
        type: "uint256",
      },
    ],
    name: "DepthTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidHashLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "InvalidIndex",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLevel",
    type: "error",
  },
  {
    inputs: [],
    name: "NothingToMerge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "SubDepthCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "SubTreesAlreadyMerged",
    type: "error",
  },
  {
    inputs: [],
    name: "SubTreesNotMerged",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_subDepth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
    ],
    name: "SubdepthTooLarge",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_DEPTH",
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
    name: "calcMinHeight",
    outputs: [
      {
        internalType: "uint256",
        name: "depth",
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
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "enqueue",
    outputs: [
      {
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
    ],
    name: "getMainRoot",
    outputs: [
      {
        internalType: "uint256",
        name: "mainRoot",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSmallSRTroot",
    outputs: [
      {
        internalType: "uint256",
        name: "smallSubTreeRoot",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSrIndices",
    outputs: [
      {
        internalType: "uint256",
        name: "next",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "current",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getSubRoot",
    outputs: [
      {
        internalType: "uint256",
        name: "subRoot",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "array",
        type: "uint256[2]",
      },
    ],
    name: "hash2",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "array",
        type: "uint256[3]",
      },
    ],
    name: "hash3",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "array",
        type: "uint256[4]",
      },
    ],
    name: "hash4",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_level",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "hashLevelLeaf",
    outputs: [
      {
        internalType: "uint256",
        name: "hashed",
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
        name: "_subRoot",
        type: "uint256",
      },
    ],
    name: "insertSubTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depth",
        type: "uint256",
      },
    ],
    name: "merge",
    outputs: [
      {
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numSrQueueOps",
        type: "uint256",
      },
    ],
    name: "mergeSubRoots",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numLeaves",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "sha256Hash",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "subTreesMerged",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treeMerged",
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
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b50604051620022dd380380620022dd83398101604081905262000034916200063e565b8080600533806200006057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6200006b81620005ee565b50816000036200008e5760405163682e504160e11b815260040160405180910390fd5b6020821115620000bc57604051637ccdcc9760e11b8152600481018390526020602482015260440162000057565b80600214158015620000cf575080600514155b15620000ee57604051636f7b6c0360e01b815260040160405180910390fd5b6000805460ff60a01b191660028314600160a01b02179055608082905260a08190526200011c82826200076d565b60c05250507f0ef71f46e11a513c599eed9dd03576c33439bcfb1cee155316f90541e41649ba6101725550507f0404a2ed0a1df2006441895d9a65ffffdd4968cb5f555fe72a6da7aaec83e1a0610173557f0b1c3d09dd575749a374a9dc1ee32af8c2312e24ad33a3e40fce8120b0f25fe3610174557f1f60ed72fc1915366d2e52cfc7ddc0ff854c7aee9abbc07d1ca88ada842354dc610175557f2ca1efc603fc121baf791319195ee3ab7fa075cee664d008f9ab2870f5028360610176557f2a0381fc4fb108733dfc58c355f2de753bcde61bd988eaa7d33fc967262be5ad610177557f12c6c7cce0332367373dafc95d75b98dd58980410434929dff09466a4ba262db610178557f2f212d3cc7e7334c4a10ced1be011b9cd70f73cca5522fc4137a51be8a17d18e610179557f0968ef20d515d8d743b2cf66603f8b86f3fdeee932fdc911774bb8699566e11c61017a557f2e3604981890fb676c3dac1e14c5c201573f99d1b9e67025109baf274b10e9dd61017b557f147d317fd4b7a1dd6cb961cfba444466b3c431ea638c8df74a89fc591d1a3a5161017c557f10ea2b72952b619afd5b9bc50561df8de0c6e1ba9b5ad66b179c39c420304a7561017d557f1c49f7b357d244d9144676ad23f79465ef5b88ef0f91762a3d35997688af9a5a61017e557f05ca0cfef8158efc5c4af44122e2765179b5463618d5c5ac6185c192332cade961017f557f0ae1595634e8a2e23620f33f9b2b5a23387a28f5833814646900110842f3a109610180557f08be8c2a6a099d9cdc96f9197af6ad99595d73419eb0694eaea432fa18baa203610181557f207f689ce35cf857ee6e68c42d31bb2191d1e84d7a295ccd63995ca7369d20eb610182557f2a6f6b7e4a2cd1a6466ed17debb0a27904e99adbd72be85566a87340f41efd05610183557f0f0725795350566920bbf56d3f22c4d38e832e638c9cb91811f83194e9dd74be610184557f02cd50632e5c5b00a9a93f434797725ec0f85f11ba1b6a844f0cd10c70df6392610185557f08868b85d2fa4c17eec0a7d8bca4671a00474bff80e801981437b77aa11d10b5610186557f294a84b7b46ea0a781877a2c0efd1ee56758d9ee55722721867efe53f4645286610187557f02cb8070979a018bb919f0d1a25d5ad3d5a376c4cf66f36d33434d221ca77e88610188557f05dfce8303f471d776762f2ddd37f05191b8bf5064d8d28e892cd4ec21e7aab4610189557f28a47617aa1e26bf42fd3b26e88aa717fd759bb92b22faaf5ad82090680b523161018a557f1de9253f5fa546603817abd83d1a13c8562f2bf6a0069a546fe546ca0c03c17061018b557f1cb9bd316e341b873dbbef94fd699c6e3a638451de2817db1620235db2b6c39e61018c557f0654785b2917d7c659a95738add3d8eb51cbbefc0f521c2640bc74b0fec5816261018d557f2eed74eacf5de60a758f815cb5e73015455c38408143fc25810d03e1ec9e352461018e557f16bea3363deb4753db67be8b19110b169ae39f33113a92773c41a8b025ca5a9361018f557f2b0dd3b7e0a7e234a4a1b48dd0e9083dc8bfc8cd7f72abdb93a1b8e5ef3e22ed610190557f0bc1ca795d5a059b1dc0c51f72c46f2288cb139ebf09f38ac3e8bca0485ed497610191557f249ca1610a7f80bbf422388c18ef9777fcdab26ee718e2b39e4011973a9023306101925562000782565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200065157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620006af57816000190482111562000693576200069362000658565b80851615620006a157918102915b93841c939080029062000673565b509250929050565b600082620006c85750600162000767565b81620006d75750600062000767565b8160018114620006f05760028114620006fb576200071b565b600191505062000767565b60ff8411156200070f576200070f62000658565b50506001821b62000767565b5060208310610133831016604e8410600b841016171562000740575081810a62000767565b6200074c83836200066e565b806000190482111562000763576200076362000658565b0290505b92915050565b60006200077b8383620006b7565b9392505050565b60805160a05160c051611aad62000830600039600081816103ea01528181610a2501528181610ac201528181610c7f0152610d820152600081816103230152818161056e015281816106e401528181610bb401528181610ec301528181611037015261129801526000818161041a0152818161047b0152818161054401528181610bed01528181610cb801528181610d0201528181610e6401528181610f1a01526111d30152611aad6000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806381d6a24a116100c3578063c00bdbcc1161007c578063c00bdbcc146102b8578063c15da65b146102cb578063d9c55ce1146102de578063dda89a6e146102e6578063e93fb4d4146102f0578063f2fde38b1461030357600080fd5b806381d6a24a146102455780638da5cb5b146102615780639cfced971461027c578063a27154ba1461028f578063b6a64acd14610297578063bea140b3146102a557600080fd5b806358bfc3791161011557806358bfc379146101cc5780635bb93995146101df5780635bf1fa4d146101f257806362a361bb1461020557806369e7c58614610218578063715018a61461023b57600080fd5b80631b9b8aa71461015d5780631ffc735d1461018357806324a47aeb146101965780633bfa6fce146101a95780633dfb88b2146101b15780633e1a8cc1146101c4575b600080fd5b61017061016b3660046114ba565b610316565b6040519081526020015b60405180910390f35b6101706101913660046114ba565b610399565b6101706101a43660046114ba565b6104c7565b6101706106d8565b6101706101bf36600461151a565b610723565b6101706107a4565b6101706101da366004611598565b6107d3565b6101706101ed36600461163e565b61086d565b61017061020036600461163e565b610892565b610170610213366004611660565b610931565b61016e5461022b90610100900460ff1681565b604051901515815260200161017a565b61024361096b565b005b610170546001546040805192835260208301919091520161017a565b6000546040516001600160a01b03909116815260200161017a565b61017061028a3660046116bb565b61097f565b610170602081565b61016e5461022b9060ff1681565b6101706102b3366004611714565b6109b9565b6102436102c63660046114ba565b6109f3565b6102436102d93660046114ba565b610a6f565b610243610c75565b6101706101715481565b6101706102fe3660046114ba565b610dbf565b61024361031136600461176d565b610dfa565b61017154600090610347837f0000000000000000000000000000000000000000000000000000000000000000611897565b101561037d5761017154604051627289df60e61b8152610374918491600401918252602082015260400190565b60405180910390fd5b61014d8260218110610391576103916118a3565b015492915050565b60006103a3610e35565b50610171546103b3826000610e62565b6103be8160016118b9565b610171556103cf61014d600061141f565b600061016f5561016e805460ff191690556101715461040f907f0000000000000000000000000000000000000000000000000000000000000000906118cc565b6000036104c25760027f000000000000000000000000000000000000000000000000000000000000000060218110610449576104496118a3565b600402015460018054600090815261014c6020526040812092909255805491610471836118ee565b90915550600290507f0000000000000000000000000000000000000000000000000000000000000000602181106104aa576104aa6118a3565b6004020160008091018190556104c29060869061141f565b919050565b60006104d1610e35565b816000036104f257604051630543d40760e11b815260040160405180910390fd5b61016e5460ff1661051657604051631e596e4360e11b815260040160405180910390fd5b602082111561054257604051632cd31ae960e01b81526004810183905260206024820152604401610374565b7f00000000000000000000000000000000000000000000000000000000000000005b61017154610592827f0000000000000000000000000000000000000000000000000000000000000000611897565b10156105aa57806105a2816118ee565b915050610564565b808310156105d457604051627289df60e61b81526004810184905260248101829052604401610374565b8083036106105761016f5461014d84602181106105f3576105f36118a3565b0155505061016e805461ff00191661010017905561016f54919050565b61016f549150805b838110156106aa57600061062b82610fa3565b600054909150600160a01b900460ff16156106635761064861142e565b8481526020810182905261065b81610931565b945050610697565b61066b61144c565b848152602081018290526040810182905260608101829052608081018290526106938161097f565b9450505b50806106a2816118ee565b915050610618565b508161014d84602181106106c0576106c06118a3565b015561016e805461ff00191661010017905550919050565b60015b600154610708827f0000000000000000000000000000000000000000000000000000000000000000611897565b10156107205780610718816118ee565b9150506106db565b90565b60405163248f667760e01b815260009073__$ce9c2c925f157047e54fa833ec4e61409f$__9063248f66779061075d908590600401611907565b602060405180830381865af415801561077a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079e9190611938565b92915050565b61016e5460009060ff166107cb57604051631e596e4360e11b815260040160405180910390fd5b5061016f5490565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016002836040516020016108099190611951565b60408051601f198184030181529082905261082391611987565b602060405180830381855afa158015610840573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906108639190611938565b61079e91906118cc565b600061087761142e565b8381526020810183905261088a81610931565b949350505050565b600061089c61144c565b600284602181106108af576108af6118a3565b60040201548152600284602181106108c9576108c96118a3565b60040201600101548160016020020152600284602181106108ec576108ec6118a3565b600402016002015481600260200201526002846021811061090f5761090f6118a3565b6004020160030154816003602002015282816004602002015261088a8161097f565b6040516314d2f97b60e11b815260009073__$6574937f64fc1d7710ec0e28b7a36713bb$__906329a5f2f69061075d9085906004016119b6565b610973610e35565b61097d6000610fb9565b565b604051630926f44b60e31b815260009073__$20527677031d76601747626a9845039fe4$__90634937a2589061075d9085906004016119de565b6040516304b98e1d60e31b815260009073__$dc01a9744591ab014bc46a3b7671cdaefb$__906325cc70e89061075d908590600401611a06565b6109fb610e35565b60018054600090815261014c6020526040812083905581549190610a1e836118ee565b91905055507f00000000000000000000000000000000000000000000000000000000000000006101716000828254610a5691906118b9565b9091555050600061016f555061016e805460ff19169055565b610a77610e35565b61016e5460ff1615610a9c57604051630d36aec160e01b815260040160405180910390fd5b61017154600003610ac0576040516316a0341160e11b815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000061017154610aef91906118cc565b15610afc57610afc610c75565b600154600103610b2557610b106000610dbf565b61016f5561016e805460ff1916600117905550565b6000610b2f6106d8565b610170549091506000905b600154811015610bab578315801590610b5257508382145b15610b5d5750505050565b610b74610b6c61017054610dbf565b600085611009565b6101708054906000610b85836118ee565b91905055508180610b95906118ee565b9250508080610ba3906118ee565b915050610b3a565b506000610bd8837f0000000000000000000000000000000000000000000000000000000000000000611897565b90506001546101705403610c41576000610c117f0000000000000000000000000000000000000000000000000000000000000000610fa3565b6001549091505b82811015610c3e57610c2c82600087611009565b80610c36816118ee565b915050610c18565b50505b60a78360218110610c5457610c546118a3565b600402016000015461016f55505061016e805460ff19166001179055505b50565b610c7d610e35565b7f000000000000000000000000000000000000000000000000000000000000000061017154610cac91906118cc565b600003610cf457610cdc7f0000000000000000000000000000000000000000000000000000000000000000610fa3565b600154600090815261014c6020526040902055610d65565b610cfe60006111d1565b60027f000000000000000000000000000000000000000000000000000000000000000060218110610d3157610d316118a3565b6004020154600154600090815261014c6020526040812091909155610d589060029061146a565b610d6561014d600061141f565b60006001546001610d7691906118b9565b60018190559050610da77f000000000000000000000000000000000000000000000000000000000000000082611a2e565b6101715550600061016f5561016e805460ff19169055565b60008160015411610de65760405163042a2e7160e11b815260048101839052602401610374565b50600090815261014c602052604090205490565b610e02610e35565b6001600160a01b038116610e2c57604051631e4fbdf760e01b815260006004820152602401610374565b610c7281610fb9565b6000546001600160a01b0316331461097d5760405163118cdaa760e01b8152336004820152602401610374565b7f0000000000000000000000000000000000000000000000000000000000000000811115610ea35760405163d1459f7960e01b815260040160405180910390fd5b600060868260218110610eb857610eb86118a3565b01549050610ee760017f0000000000000000000000000000000000000000000000000000000000000000611a45565b8114610f6c578260028360218110610f0157610f016118a3565b600402018260048110610f1657610f166118a3565b01557f00000000000000000000000000000000000000000000000000000000000000008214610f675760868260218110610f5257610f526118a3565b018054906000610f61836118ee565b91905055505b505050565b610f76828461133d565b925060868260218110610f8b57610f8b6118a3565b600091015581610f9a816118ee565b92505050610ea3565b60006101728260218110610391576103916118a3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8082111561101657505050565b600061012b836021811061102c5761102c6118a3565b0154905061105b60017f0000000000000000000000000000000000000000000000000000000000000000611a45565b81146110b9578360a78460218110611075576110756118a3565b60040201826004811061108a5761108a6118a3565b015561012b83602181106110a0576110a06118a3565b0180549060006110af836118ee565b91905055506111cb565b60008054600160a01b900460ff1615611106576110d461142e565b60a785602181106110e7576110e76118a3565b60040201548152602081018690526110fe81610931565b91505061119b565b61110e61144c565b60005b838160ff1610156111755760a7866021811061112f5761112f6118a3565b600402018160ff1660048110611147576111476118a3565b0154828260ff166005811061115e5761115e6118a3565b60200201528061116d81611a58565b915050611111565b5085818460058110611189576111896118a3565b60200201526111978161097f565b9150505b61012b84602181106111af576111af6118a3565b60009101556111c9816111c38660016118b9565b85611009565b505b50505050565b7f0000000000000000000000000000000000000000000000000000000000000000811015610c725760006086826021811061120e5761120e6118a3565b01549050801561131257600061122261144c565b600061122d85610fa3565b905060005b848160ff1610156112965760028660218110611250576112506118a3565b600402018160ff1660048110611268576112686118a3565b0154838260ff166005811061127f5761127f6118a3565b60200201528061128e81611a58565b915050611232565b7f00000000000000000000000000000000000000000000000000000000000000008160ff1610156112ee5781838260ff16600581106112d7576112d76118a3565b6020020152806112e681611a58565b915050611296565b6112f78361097f565b935061130d846113088860016118b9565b610e62565b505050505b60868260218110611325576113256118a3565b600091015581611334816118ee565b925050506111d1565b600061134761144c565b6002846021811061135a5761135a6118a3565b6004020154815260028460218110611374576113746118a3565b6004020160010154816001602002015260028460218110611397576113976118a3565b60040201600201548160026020020152600284602181106113ba576113ba6118a3565b600402016003015481600360200201528281600460200201526113dc8161097f565b9150600284602181106113f1576113f16118a3565b60040201600061141891905060008155600101600081556001016000815560010160009055565b5092915050565b50610c72906021810190611479565b60405180604001604052806002906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b50610c72906084810190611492565b5b8082111561148e576000815560010161147a565b5090565b8082111561148e57600080825560018201819055600282018190556003820155600401611492565b6000602082840312156114cc57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611512576115126114d3565b604052919050565b60006080828403121561152c57600080fd5b82601f83011261153b57600080fd5b6040516080810181811067ffffffffffffffff8211171561155e5761155e6114d3565b60405280608084018581111561157357600080fd5b845b8181101561158d578035835260209283019201611575565b509195945050505050565b600060208083850312156115ab57600080fd5b823567ffffffffffffffff808211156115c357600080fd5b818501915085601f8301126115d757600080fd5b8135818111156115e9576115e96114d3565b8060051b91506115fa8483016114e9565b818152918301840191848101908884111561161457600080fd5b938501935b8385101561163257843582529385019390850190611619565b98975050505050505050565b6000806040838503121561165157600080fd5b50508035926020909101359150565b60006040828403121561167257600080fd5b82601f83011261168157600080fd5b6040516040810181811067ffffffffffffffff821117156116a4576116a46114d3565b806040525080604084018581111561157357600080fd5b600060a082840312156116cd57600080fd5b82601f8301126116dc57600080fd5b60405160a0810181811067ffffffffffffffff821117156116ff576116ff6114d3565b6040528060a084018581111561157357600080fd5b60006060828403121561172657600080fd5b82601f83011261173557600080fd5b6040516060810181811067ffffffffffffffff82111715611758576117586114d3565b60405280606084018581111561157357600080fd5b60006020828403121561177f57600080fd5b81356001600160a01b038116811461179657600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156117ee5781600019048211156117d4576117d461179d565b808516156117e157918102915b93841c93908002906117b8565b509250929050565b6000826118055750600161079e565b816118125750600061079e565b816001811461182857600281146118325761184e565b600191505061079e565b60ff8411156118435761184361179d565b50506001821b61079e565b5060208310610133831016604e8410600b8410161715611871575081810a61079e565b61187b83836117b3565b806000190482111561188f5761188f61179d565b029392505050565b600061179683836117f6565b634e487b7160e01b600052603260045260246000fd5b8082018082111561079e5761079e61179d565b6000826118e957634e487b7160e01b600052601260045260246000fd5b500690565b6000600182016119005761190061179d565b5060010190565b60808101818360005b600481101561192f578151835260209283019290910190600101611910565b50505092915050565b60006020828403121561194a57600080fd5b5051919050565b815160009082906020808601845b8381101561197b5781518552938201939082019060010161195f565b50929695505050505050565b6000825160005b818110156119a8576020818601810151858301520161198e565b506000920191825250919050565b60408101818360005b600281101561192f5781518352602092830192909101906001016119bf565b60a08101818360005b600581101561192f5781518352602092830192909101906001016119e7565b60608101818360005b600381101561192f578151835260209283019290910190600101611a0f565b808202811582820484141761079e5761079e61179d565b8181038181111561079e5761079e61179d565b600060ff821660ff8103611a6e57611a6e61179d565b6001019291505056fea264697066735822122068a1131b6c6dfbb3893f54c9551377294b97248fdd759de69d7ff5494cab996f64736f6c63430008140033";

type AccQueueQuinaryBlankSlConstructorParams =
  | [
      linkLibraryAddresses: AccQueueQuinaryBlankSlLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccQueueQuinaryBlankSlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class AccQueueQuinaryBlankSl__factory extends ContractFactory {
  constructor(...args: AccQueueQuinaryBlankSlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        AccQueueQuinaryBlankSl__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: AccQueueQuinaryBlankSlLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ce9c2c925f157047e54fa833ec4e61409f\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT5.sol:PoseidonT5"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$6574937f64fc1d7710ec0e28b7a36713bb\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT3.sol:PoseidonT3"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$20527677031d76601747626a9845039fe4\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT6.sol:PoseidonT6"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$dc01a9744591ab014bc46a3b7671cdaefb\\$__", "g"),
      linkLibraryAddresses["contracts/crypto/PoseidonT4.sol:PoseidonT4"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    _subDepth: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_subDepth, overrides || {});
  }
  override deploy(
    _subDepth: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_subDepth, overrides || {}) as Promise<
      AccQueueQuinaryBlankSl & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): AccQueueQuinaryBlankSl__factory {
    return super.connect(runner) as AccQueueQuinaryBlankSl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccQueueQuinaryBlankSlInterface {
    return new Interface(_abi) as AccQueueQuinaryBlankSlInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AccQueueQuinaryBlankSl {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AccQueueQuinaryBlankSl;
  }
}

export interface AccQueueQuinaryBlankSlLibraryAddresses {
  ["contracts/crypto/PoseidonT5.sol:PoseidonT5"]: string;
  ["contracts/crypto/PoseidonT3.sol:PoseidonT3"]: string;
  ["contracts/crypto/PoseidonT6.sol:PoseidonT6"]: string;
  ["contracts/crypto/PoseidonT4.sol:PoseidonT4"]: string;
}
