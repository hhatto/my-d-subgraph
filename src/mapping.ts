import { Lockedup } from "../generated/Lockup/Lockup"
import { PropertyTransfer } from "../generated/Withdraw/Withdraw"
import { Lockedup as DevLockedup, PropertyTransfer as DevPropertyTransfer } from "../generated/schema"

export function handleLockedup(event: Lockedup): void {
  let entity = DevLockedup.load(event.transaction.from.toHex())
  if (entity == null) {
    entity = new DevLockedup(event.transaction.from.toHex())
  }

  entity.from = event.params._from
  entity.property = event.params._property
  entity.value = event.params._value

  entity.save()
}

export function handlePropertyTransfer(event: PropertyTransfer): void {
  let entity = DevPropertyTransfer.load(event.transaction.from.toHex())
  if (entity == null) {
    entity = new DevPropertyTransfer(event.transaction.from.toHex())
  }

  entity.property = event.params._property
  entity.from = event.params._from
  entity.to = event.params._to

  entity.save()
}
