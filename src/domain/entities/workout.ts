export class Workout {
  id: string
  userId: string
  exerciseIds: string[]
  title: string
  createdAt: string
  updatedAt?: string

  constructor (
    id: string,
    userId: string,
    exerciseIds: string[],
    title: string,
    createdAt: string,
    updatedAt?: string
  ) {
    this.id = id
    this.userId = userId
    this.exerciseIds = exerciseIds
    this.title = title
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
