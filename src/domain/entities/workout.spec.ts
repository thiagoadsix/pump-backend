import { Workout } from './workout'

describe('Workout', () => {
  it('should set the properties', () => {
    const fixedDate = new Date('2023-01-09T16:23:27.190Z')
    jest.spyOn(global, 'Date').mockImplementation(() => fixedDate)

    const id = 'uuid'
    const sets = [
      {
        id: '0001',
        repetitions: 10,
        series: 3,
        weight: 10
      }
    ]
    const userId = 'uuid'
    const name = 'Workout Name'
    const createdAt = '2023-01-09T16:23:27.190Z'

    const workout = new Workout(id, userId, sets, name, createdAt)

    expect(workout.id).toBe('uuid')
    expect(workout.sets[0]).toHaveProperty('weight')
    expect(workout.userId).toBe('uuid')
    expect(workout.name).toBe('Workout Name')
    expect(workout.createdAt).toBe(new Date().toISOString())
  })
})
