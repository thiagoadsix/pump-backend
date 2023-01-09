import { v4 } from 'uuid'

export class UUIDService {
  async v4 (): Promise<string> {
    return v4()
  }
}
