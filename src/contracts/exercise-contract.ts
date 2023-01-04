import { S3 } from 'aws-sdk'

export interface ExerciseContract {
  client: () => S3
}
