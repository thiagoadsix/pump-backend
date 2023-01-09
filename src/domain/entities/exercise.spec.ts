import { Exercise } from './Exercise'
import { BodyPartTypeAggregate, EquipmentTypeAggregate, TargetTypeAggregate } from '../aggregates'

describe('Exercise', () => {
  it('should set the properties', () => {
    const id = '1'
    const name = 'Exercise name'
    const target: TargetTypeAggregate = 'abs'
    const bodyPart: BodyPartTypeAggregate = 'back'
    const equipment: EquipmentTypeAggregate = 'assisted'
    const url = 'http://example.com/exercise.gif'
    const exercise = new Exercise(id, name, target, bodyPart, equipment, url)

    expect(exercise.id).toBe(id)
    expect(exercise.name).toBe(name)
    expect(exercise.target).toBe(target)
    expect(exercise.bodyPart).toBe(bodyPart)
    expect(exercise.equipment).toBe(equipment)
    expect(exercise.url).toBe(url)
  })
})
