/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace MACI {
  export type PollContractsStruct = {
    poll: AddressLike;
    messageProcessor: AddressLike;
    tally: AddressLike;
  };

  export type PollContractsStructOutput = [
    poll: string,
    messageProcessor: string,
    tally: string
  ] & { poll: string; messageProcessor: string; tally: string };
}

export declare namespace Params {
  export type TreeDepthsStruct = {
    intStateTreeDepth: BigNumberish;
    messageTreeSubDepth: BigNumberish;
    messageTreeDepth: BigNumberish;
    voteOptionTreeDepth: BigNumberish;
  };

  export type TreeDepthsStructOutput = [
    intStateTreeDepth: bigint,
    messageTreeSubDepth: bigint,
    messageTreeDepth: bigint,
    voteOptionTreeDepth: bigint
  ] & {
    intStateTreeDepth: bigint;
    messageTreeSubDepth: bigint;
    messageTreeDepth: bigint;
    voteOptionTreeDepth: bigint;
  };
}

export declare namespace DomainObjs {
  export type PubKeyStruct = { x: BigNumberish; y: BigNumberish };

  export type PubKeyStructOutput = [x: bigint, y: bigint] & {
    x: bigint;
    y: bigint;
  };

  export type MessageStruct = { msgType: BigNumberish; data: BigNumberish[] };

  export type MessageStructOutput = [msgType: bigint, data: bigint[]] & {
    msgType: bigint;
    data: bigint[];
  };

  export type StateLeafStruct = {
    pubKey: DomainObjs.PubKeyStruct;
    voiceCreditBalance: BigNumberish;
    timestamp: BigNumberish;
  };

  export type StateLeafStructOutput = [
    pubKey: DomainObjs.PubKeyStructOutput,
    voiceCreditBalance: bigint,
    timestamp: bigint
  ] & {
    pubKey: DomainObjs.PubKeyStructOutput;
    voiceCreditBalance: bigint;
    timestamp: bigint;
  };
}

export interface MACIInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MESSAGE_DATA_LENGTH"
      | "deployPoll"
      | "getPoll"
      | "getStateAqRoot"
      | "hash2"
      | "hash3"
      | "hash4"
      | "hash5"
      | "hashLeftRight"
      | "hashMessageAndEncPubKey"
      | "hashStateLeaf"
      | "initialVoiceCreditProxy"
      | "mergeStateAq"
      | "mergeStateAqSubRoots"
      | "messageProcessorFactory"
      | "nextPollId"
      | "numSignUps"
      | "owner"
      | "padAndHashMessage"
      | "pollFactory"
      | "polls"
      | "renounceOwnership"
      | "sha256Hash"
      | "signUp"
      | "signUpGatekeeper"
      | "stateAq"
      | "stateTreeDepth"
      | "subtreesMerged"
      | "tallyFactory"
      | "topupCredit"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DeployPoll" | "OwnershipTransferred" | "SignUp"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MESSAGE_DATA_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployPoll",
    values: [
      BigNumberish,
      Params.TreeDepthsStruct,
      DomainObjs.PubKeyStruct,
      AddressLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoll",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStateAqRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hash2",
    values: [[BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash3",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash4",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash5",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashMessageAndEncPubKey",
    values: [DomainObjs.MessageStruct, DomainObjs.PubKeyStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "hashStateLeaf",
    values: [DomainObjs.StateLeafStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initialVoiceCreditProxy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mergeStateAq",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mergeStateAqSubRoots",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "messageProcessorFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextPollId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numSignUps",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "padAndHashMessage",
    values: [[BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pollFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "polls", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sha256Hash",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "signUp",
    values: [DomainObjs.PubKeyStruct, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signUpGatekeeper",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stateAq", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stateTreeDepth",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "subtreesMerged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tallyFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "topupCredit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "MESSAGE_DATA_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployPoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPoll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStateAqRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hash2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashMessageAndEncPubKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashStateLeaf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialVoiceCreditProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mergeStateAq",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mergeStateAqSubRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "messageProcessorFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextPollId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numSignUps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "padAndHashMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pollFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "polls", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sha256Hash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "signUpGatekeeper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stateAq", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stateTreeDepth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "subtreesMerged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tallyFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "topupCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace DeployPollEvent {
  export type InputTuple = [
    _pollId: BigNumberish,
    _coordinatorPubKeyX: BigNumberish,
    _coordinatorPubKeyY: BigNumberish,
    pollAddr: MACI.PollContractsStruct
  ];
  export type OutputTuple = [
    _pollId: bigint,
    _coordinatorPubKeyX: bigint,
    _coordinatorPubKeyY: bigint,
    pollAddr: MACI.PollContractsStructOutput
  ];
  export interface OutputObject {
    _pollId: bigint;
    _coordinatorPubKeyX: bigint;
    _coordinatorPubKeyY: bigint;
    pollAddr: MACI.PollContractsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignUpEvent {
  export type InputTuple = [
    _stateIndex: BigNumberish,
    _userPubKeyX: BigNumberish,
    _userPubKeyY: BigNumberish,
    _voiceCreditBalance: BigNumberish,
    _timestamp: BigNumberish
  ];
  export type OutputTuple = [
    _stateIndex: bigint,
    _userPubKeyX: bigint,
    _userPubKeyY: bigint,
    _voiceCreditBalance: bigint,
    _timestamp: bigint
  ];
  export interface OutputObject {
    _stateIndex: bigint;
    _userPubKeyX: bigint;
    _userPubKeyY: bigint;
    _voiceCreditBalance: bigint;
    _timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MACI extends BaseContract {
  connect(runner?: ContractRunner | null): MACI;
  waitForDeployment(): Promise<this>;

  interface: MACIInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  MESSAGE_DATA_LENGTH: TypedContractMethod<[], [bigint], "view">;

  deployPoll: TypedContractMethod<
    [
      _duration: BigNumberish,
      _treeDepths: Params.TreeDepthsStruct,
      _coordinatorPubKey: DomainObjs.PubKeyStruct,
      _verifier: AddressLike,
      _vkRegistry: AddressLike,
      _mode: BigNumberish
    ],
    [MACI.PollContractsStructOutput],
    "nonpayable"
  >;

  getPoll: TypedContractMethod<[_pollId: BigNumberish], [string], "view">;

  getStateAqRoot: TypedContractMethod<[], [bigint], "view">;

  hash2: TypedContractMethod<
    [array: [BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;

  hash3: TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;

  hash4: TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;

  hash5: TypedContractMethod<
    [
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ],
    [bigint],
    "view"
  >;

  hashLeftRight: TypedContractMethod<
    [left: BigNumberish, right: BigNumberish],
    [bigint],
    "view"
  >;

  hashMessageAndEncPubKey: TypedContractMethod<
    [_message: DomainObjs.MessageStruct, _encPubKey: DomainObjs.PubKeyStruct],
    [bigint],
    "view"
  >;

  hashStateLeaf: TypedContractMethod<
    [_stateLeaf: DomainObjs.StateLeafStruct],
    [bigint],
    "view"
  >;

  initialVoiceCreditProxy: TypedContractMethod<[], [string], "view">;

  mergeStateAq: TypedContractMethod<
    [_pollId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  mergeStateAqSubRoots: TypedContractMethod<
    [_numSrQueueOps: BigNumberish, _pollId: BigNumberish],
    [void],
    "nonpayable"
  >;

  messageProcessorFactory: TypedContractMethod<[], [string], "view">;

  nextPollId: TypedContractMethod<[], [bigint], "view">;

  numSignUps: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  padAndHashMessage: TypedContractMethod<
    [dataToPad: [BigNumberish, BigNumberish], msgType: BigNumberish],
    [
      [
        DomainObjs.MessageStructOutput,
        DomainObjs.PubKeyStructOutput,
        bigint
      ] & {
        message: DomainObjs.MessageStructOutput;
        padKey: DomainObjs.PubKeyStructOutput;
        msgHash: bigint;
      }
    ],
    "view"
  >;

  pollFactory: TypedContractMethod<[], [string], "view">;

  polls: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  sha256Hash: TypedContractMethod<[array: BigNumberish[]], [bigint], "view">;

  signUp: TypedContractMethod<
    [
      _pubKey: DomainObjs.PubKeyStruct,
      _signUpGatekeeperData: BytesLike,
      _initialVoiceCreditProxyData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  signUpGatekeeper: TypedContractMethod<[], [string], "view">;

  stateAq: TypedContractMethod<[], [string], "view">;

  stateTreeDepth: TypedContractMethod<[], [bigint], "view">;

  subtreesMerged: TypedContractMethod<[], [boolean], "view">;

  tallyFactory: TypedContractMethod<[], [string], "view">;

  topupCredit: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MESSAGE_DATA_LENGTH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deployPoll"
  ): TypedContractMethod<
    [
      _duration: BigNumberish,
      _treeDepths: Params.TreeDepthsStruct,
      _coordinatorPubKey: DomainObjs.PubKeyStruct,
      _verifier: AddressLike,
      _vkRegistry: AddressLike,
      _mode: BigNumberish
    ],
    [MACI.PollContractsStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getPoll"
  ): TypedContractMethod<[_pollId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getStateAqRoot"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hash2"
  ): TypedContractMethod<
    [array: [BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hash3"
  ): TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hash4"
  ): TypedContractMethod<
    [array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hash5"
  ): TypedContractMethod<
    [
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashLeftRight"
  ): TypedContractMethod<
    [left: BigNumberish, right: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashMessageAndEncPubKey"
  ): TypedContractMethod<
    [_message: DomainObjs.MessageStruct, _encPubKey: DomainObjs.PubKeyStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashStateLeaf"
  ): TypedContractMethod<
    [_stateLeaf: DomainObjs.StateLeafStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialVoiceCreditProxy"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mergeStateAq"
  ): TypedContractMethod<[_pollId: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "mergeStateAqSubRoots"
  ): TypedContractMethod<
    [_numSrQueueOps: BigNumberish, _pollId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "messageProcessorFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nextPollId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "numSignUps"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "padAndHashMessage"
  ): TypedContractMethod<
    [dataToPad: [BigNumberish, BigNumberish], msgType: BigNumberish],
    [
      [
        DomainObjs.MessageStructOutput,
        DomainObjs.PubKeyStructOutput,
        bigint
      ] & {
        message: DomainObjs.MessageStructOutput;
        padKey: DomainObjs.PubKeyStructOutput;
        msgHash: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "pollFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "polls"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sha256Hash"
  ): TypedContractMethod<[array: BigNumberish[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "signUp"
  ): TypedContractMethod<
    [
      _pubKey: DomainObjs.PubKeyStruct,
      _signUpGatekeeperData: BytesLike,
      _initialVoiceCreditProxyData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signUpGatekeeper"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stateAq"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stateTreeDepth"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "subtreesMerged"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "tallyFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "topupCredit"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "DeployPoll"
  ): TypedContractEvent<
    DeployPollEvent.InputTuple,
    DeployPollEvent.OutputTuple,
    DeployPollEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "SignUp"
  ): TypedContractEvent<
    SignUpEvent.InputTuple,
    SignUpEvent.OutputTuple,
    SignUpEvent.OutputObject
  >;

  filters: {
    "DeployPoll(uint256,uint256,uint256,tuple)": TypedContractEvent<
      DeployPollEvent.InputTuple,
      DeployPollEvent.OutputTuple,
      DeployPollEvent.OutputObject
    >;
    DeployPoll: TypedContractEvent<
      DeployPollEvent.InputTuple,
      DeployPollEvent.OutputTuple,
      DeployPollEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "SignUp(uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      SignUpEvent.InputTuple,
      SignUpEvent.OutputTuple,
      SignUpEvent.OutputObject
    >;
    SignUp: TypedContractEvent<
      SignUpEvent.InputTuple,
      SignUpEvent.OutputTuple,
      SignUpEvent.OutputObject
    >;
  };
}
