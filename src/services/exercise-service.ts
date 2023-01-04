import { ExerciseContract } from '@contracts/exercise-contract'

export type BodyPartType =
  'back' |
  'card' |
  'chest' |
  'lower arms' |
  'lower legs' |
  'neck' |
  'shoulders' |
  'upper arms' |
  'upper legs' |
  'waist'

export interface GetAllExercisesInterface {
  id: string
  name: string
  target: string
  bodyPart: BodyPartType
  equipment: string
  gifUrl: string
}

export class ExerciseService {
  constructor (private readonly s3: ExerciseContract) {
    this.s3 = s3
  }

  public async getAllExercises (): Promise<GetAllExercisesInterface[]> {
    const object = await this.s3.client().getObject({
      Bucket: 'pump-data/json',
      Key: 'all-exercises.json'
    }).promise()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-base-to-string
    const exercisesObject: GetAllExercisesInterface[] = JSON.parse(object.Body!.toString('utf-8'))

    return exercisesObject.map(exercise => ({ ...exercise }))
  }

  public async getByBodyPart (bodyPart: BodyPartType): Promise<GetAllExercisesInterface[]> {
    const object = await this.s3.client().getObject({
      Bucket: 'pump-data/json',
      Key: 'all-exercises.json'
    }).promise()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-base-to-string
    const exercisesObject: GetAllExercisesInterface[] = JSON.parse(object.Body!.toString('utf-8'))

    return exercisesObject.filter(exercise => exercise.bodyPart === bodyPart)
  }
}
