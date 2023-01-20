export class Sets {
  id: string
  series: number
  repetitions: number
  weight: number
}

export class Workout {
  id: string
  userId: string
  name: string
  sets: Sets[]

  createdAt: string
  updatedAt?: string

  constructor (
    id: string,
    userId: string,
    sets: Sets[],
    name: string,
    createdAt: string,
    updatedAt?: string
  ) {
    this.id = id
    this.userId = userId
    this.sets = sets
    this.name = name
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
