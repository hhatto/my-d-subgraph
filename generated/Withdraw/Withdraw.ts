// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PropertyTransfer extends ethereum.Event {
  get params(): PropertyTransfer__Params {
    return new PropertyTransfer__Params(this);
  }
}

export class PropertyTransfer__Params {
  _event: PropertyTransfer;

  constructor(event: PropertyTransfer) {
    this._event = event;
  }

  get _property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Withdraw extends ethereum.SmartContract {
  static bind(address: Address): Withdraw {
    return new Withdraw("Withdraw", address);
  }

  configAddress(): Address {
    let result = super.call("configAddress", "configAddress():(address)", []);

    return result[0].toAddress();
  }

  try_configAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "configAddress",
      "configAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCumulativePrice(_property: Address): BigInt {
    let result = super.call(
      "getCumulativePrice",
      "getCumulativePrice(address):(uint256)",
      [ethereum.Value.fromAddress(_property)]
    );

    return result[0].toBigInt();
  }

  try_getCumulativePrice(_property: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCumulativePrice",
      "getCumulativePrice(address):(uint256)",
      [ethereum.Value.fromAddress(_property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLastWithdrawalPrice(_property: Address, _user: Address): BigInt {
    let result = super.call(
      "getLastWithdrawalPrice",
      "getLastWithdrawalPrice(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getLastWithdrawalPrice(
    _property: Address,
    _user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLastWithdrawalPrice",
      "getLastWithdrawalPrice(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPendingWithdrawal(_property: Address, _user: Address): BigInt {
    let result = super.call(
      "getPendingWithdrawal",
      "getPendingWithdrawal(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getPendingWithdrawal(
    _property: Address,
    _user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPendingWithdrawal",
      "getPendingWithdrawal(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRewardsAmount(_property: Address): BigInt {
    let result = super.call(
      "getRewardsAmount",
      "getRewardsAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_property)]
    );

    return result[0].toBigInt();
  }

  try_getRewardsAmount(_property: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardsAmount",
      "getRewardsAmount(address):(uint256)",
      [ethereum.Value.fromAddress(_property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStorageAddress(): Address {
    let result = super.call(
      "getStorageAddress",
      "getStorageAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getStorageAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getStorageAddress",
      "getStorageAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getStorageLastWithdrawnReward(_property: Address, _user: Address): BigInt {
    let result = super.call(
      "getStorageLastWithdrawnReward",
      "getStorageLastWithdrawnReward(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_getStorageLastWithdrawnReward(
    _property: Address,
    _user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getStorageLastWithdrawnReward",
      "getStorageLastWithdrawnReward(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calculateWithdrawableAmount(_property: Address, _user: Address): BigInt {
    let result = super.call(
      "calculateWithdrawableAmount",
      "calculateWithdrawableAmount(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_calculateWithdrawableAmount(
    _property: Address,
    _user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateWithdrawableAmount",
      "calculateWithdrawableAmount(address,address):(uint256)",
      [ethereum.Value.fromAddress(_property), ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _config(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeOwnerCall extends ethereum.Call {
  get inputs(): ChangeOwnerCall__Inputs {
    return new ChangeOwnerCall__Inputs(this);
  }

  get outputs(): ChangeOwnerCall__Outputs {
    return new ChangeOwnerCall__Outputs(this);
  }
}

export class ChangeOwnerCall__Inputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOwnerCall__Outputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }
}

export class CreateStorageCall extends ethereum.Call {
  get inputs(): CreateStorageCall__Inputs {
    return new CreateStorageCall__Inputs(this);
  }

  get outputs(): CreateStorageCall__Outputs {
    return new CreateStorageCall__Outputs(this);
  }
}

export class CreateStorageCall__Inputs {
  _call: CreateStorageCall;

  constructor(call: CreateStorageCall) {
    this._call = call;
  }
}

export class CreateStorageCall__Outputs {
  _call: CreateStorageCall;

  constructor(call: CreateStorageCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetStorageCall extends ethereum.Call {
  get inputs(): SetStorageCall__Inputs {
    return new SetStorageCall__Inputs(this);
  }

  get outputs(): SetStorageCall__Outputs {
    return new SetStorageCall__Outputs(this);
  }
}

export class SetStorageCall__Inputs {
  _call: SetStorageCall;

  constructor(call: SetStorageCall) {
    this._call = call;
  }

  get _storageAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetStorageCall__Outputs {
  _call: SetStorageCall;

  constructor(call: SetStorageCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class BeforeBalanceChangeCall extends ethereum.Call {
  get inputs(): BeforeBalanceChangeCall__Inputs {
    return new BeforeBalanceChangeCall__Inputs(this);
  }

  get outputs(): BeforeBalanceChangeCall__Outputs {
    return new BeforeBalanceChangeCall__Outputs(this);
  }
}

export class BeforeBalanceChangeCall__Inputs {
  _call: BeforeBalanceChangeCall;

  constructor(call: BeforeBalanceChangeCall) {
    this._call = call;
  }

  get _property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class BeforeBalanceChangeCall__Outputs {
  _call: BeforeBalanceChangeCall;

  constructor(call: BeforeBalanceChangeCall) {
    this._call = call;
  }
}