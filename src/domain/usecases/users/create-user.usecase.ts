import { User } from '@domain/entities/user'
import { AuthService } from '@domain/protocols/services/auth.service'

export class CreateUserUsecase {
  constructor (
    private readonly authService: AuthService
  ) {
    this.authService = authService
  }

  async execute (input: CreateUserUsecase.Input): Promise<User> {
    const user = await this.authService.signUp(input)
    return user
  }
}

export namespace CreateUserUsecase {
  export interface Input {
    name: string
    email: string
    password: string
  }
}
