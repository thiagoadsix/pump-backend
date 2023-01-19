import { TargetTypeAggregate, BodyPartTypeAggregate, EquipmentTypeAggregate } from '../../aggregates'
import { Exercise } from '../../entities/exercise'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class ExerciseRepositoryMock implements ExerciseRepository {
  async findById (id: string): Promise<Exercise | null> {
    return await Promise.resolve({
      id,
      name: 'Exercise Name Test',
      target: 'abs',
      bodyPart: 'card',
      equipment: 'body weight',
      url: 'http://example.com/gifs/0001'
    })
  }

  async findAll (): Promise<Exercise[]> {
    return await Promise.resolve([
      {
        id: 'exercise-id-mock-1',
        name: 'Exercise Name Test',
        target: 'abs',
        bodyPart: 'card',
        equipment: 'body weight',
        url: 'http://example.com/gifs/0001'
      },
      {
        id: 'exercise-id-mock-2',
        name: 'Exercise Name Test',
        target: 'abs',
        bodyPart: 'card',
        equipment: 'body weight',
        url: 'http://example.com/gifs/0002'
      }
    ])
  }

  async findByTarget (target: TargetTypeAggregate): Promise<Exercise[]> {
    return await Promise.resolve([
      {
        id: 'exercise-id-mock-1',
        name: 'Exercise Name Test',
        target,
        bodyPart: 'card',
        equipment: 'body weight',
        url: 'http://example.com/gifs/0001'
      },
      {
        id: 'exercise-id-mock-2',
        name: 'Exercise Name Test',
        target,
        bodyPart: 'card',
        equipment: 'body weight',
        url: 'http://example.com/gifs/0002'
      }
    ])
  }

  async findByBodyPart (bodyPart: BodyPartTypeAggregate): Promise<Exercise[]> {
    return await Promise.resolve([
      {
        id: 'exercise-id-mock-1',
        name: 'Exercise Name Test',
        target: 'abs',
        bodyPart,
        equipment: 'body weight',
        url: 'http://example.com/gifs/0001'
      },
      {
        id: 'exercise-id-mock-2',
        name: 'Exercise Name Test',
        target: 'abs',
        bodyPart,
        equipment: 'body weight',
        url: 'http://example.com/gifs/0002'
      }
    ])
  }

  async findByEquipment (equipment: EquipmentTypeAggregate): Promise<Exercise[]> {
    return await Promise.resolve([
      {
        id: 'exercise-id-mock-1',
        name: 'Exercise Name Test',
        target: 'abs',
        bodyPart: 'card',
        equipment,
        url: 'http://example.com/gifs/0001'
      },
      {
        id: 'exercise-id-mock-2',
        name: 'Exercise Name Test',
        target: 'abs',
        bodyPart: 'card',
        equipment,
        url: 'http://example.com/gifs/0002'
      }
    ])
  }

  async findByIds (ids: string[]): Promise<Exercise[]> {
    const exercises = await Promise.resolve([
      {
        id: 'exercise-id-mock-1',
        name: 'Exercise Name Test',
        target: 'abs' as TargetTypeAggregate,
        bodyPart: 'card' as BodyPartTypeAggregate,
        equipment: 'body weight' as EquipmentTypeAggregate,
        url: 'http://example.com/gifs/0001'
      },
      {
        id: 'exercise-id-mock-2',
        name: 'Exercise Name Test',
        target: 'abs' as TargetTypeAggregate,
        bodyPart: 'card' as BodyPartTypeAggregate,
        equipment: 'body weight' as EquipmentTypeAggregate,
        url: 'http://example.com/gifs/0002'
      }
    ])

    return exercises.filter(exercise => ids.includes(exercise.id))
  }
}
