import { DeleteWorkoutByIdUsecase } from './delete-workout-by-id.usecase'

describe('DeleteWorkoutByIdUsecase', () => {
  it('should delete a workout by id', async () => {
    // mock the WorkoutRepository implementation
    const mockWorkoutRepository = {
      delete: jest.fn().mockResolvedValue(undefined),
      save: jest.fn().mockResolvedValue(undefined),
      findAll: jest.fn().mockResolvedValue(undefined),
      findById: jest.fn().mockResolvedValue(undefined)
    }

    // create an instance of the usecase
    const usecase = new DeleteWorkoutByIdUsecase(mockWorkoutRepository)

    // define the input variables
    const id = '123'
    const userId = '456'

    // execute the usecase
    await usecase.execute(id, userId)

    // assert that the delete method of the repository was called with the correct arguments
    expect(mockWorkoutRepository.delete).toHaveBeenCalledWith(id, userId)
  })
})
