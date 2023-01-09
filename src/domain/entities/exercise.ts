import { BodyPartTypeAggregate, EquipmentTypeAggregate, TargetTypeAggregate } from '../aggregates'

export class Exercise {
  id: string
  name: string
  target: TargetTypeAggregate
  bodyPart: BodyPartTypeAggregate
  equipment: EquipmentTypeAggregate
  url: string

  constructor (
    id: string,
    name: string,
    target: TargetTypeAggregate,
    bodyPart: BodyPartTypeAggregate,
    equipment: EquipmentTypeAggregate,
    url: string
  ) {
    this.id = id
    this.name = name
    this.target = target
    this.bodyPart = bodyPart
    this.equipment = equipment
    this.url = url
  }
}
