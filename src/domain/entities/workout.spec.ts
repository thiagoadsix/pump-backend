import { Workout } from './workout'

describe('Workout', () => {
  it('should set the properties', () => {
    const fixedDate = new Date('2023-01-09T16:23:27.190Z')
    jest.spyOn(global, 'Date').mockImplementation(() => fixedDate)

    const id = 'uuid'
    const exerciseIds = ['0001']
    const userId = 'uuid'
    const title = 'Workout Title'
    const createdAt = '2023-01-09T16:23:27.190Z'

    const workout = new Workout(id, userId, exerciseIds, title, createdAt)

    expect(workout.id).toBe('uuid')
    expect(workout.exerciseIds).toContainEqual('0001')
    expect(workout.userId).toBe('uuid')
    expect(workout.title).toBe('Workout Title')
    expect(workout.createdAt).toBe(new Date().toISOString())
  })
})
