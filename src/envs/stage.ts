import { StageType } from './stage-type'

export const stage = (which: StageType): any => {
  switch (which) {
    case 'local':
      return {
        s3: {
          accessKeyId: '123',
          secretAccessKey: 'xyz',
          s3ForcePathStyle: true,
          endpoint: 'http://localhost:4566'
        }
      }
    default:
      break
  }
}
