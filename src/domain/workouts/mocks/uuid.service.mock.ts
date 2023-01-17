import { UUIDService } from 'src/domain/protocols/services/uuid.service'

export class UUIDServiceMock implements UUIDService {
  async v4 (): Promise<string> {
    return await Promise.resolve('uuid-mock-id')
  }
}
