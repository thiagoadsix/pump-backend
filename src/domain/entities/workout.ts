export class Sets {
  id: string
  series: number
  repetitions: number
  weight: number

  constructor (
    id: string,
    series: number,
    repetitions: number,
    weight: number
  ) {
    this.id = id
    this.series = series
    this.repetitions = repetitions
    this.weight = weight
  }
}

export class Workout {
  id: string
  userId: string
  name: string
  sets: Sets[] = []
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
