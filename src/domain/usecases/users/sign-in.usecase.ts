import { User } from '@domain/entities/user'
import { AuthService } from '@domain/protocols/services/auth.service'

export class SignInUsecase {
  constructor (
    private readonly authService: AuthService
  ) {
    this.authService = authService
  }

  async execute (input: SignInUsecase.Input): Promise<User> {
    const user = await this.authService.signIn(input)
    return user
  }
}

export namespace SignInUsecase {
  export interface Input {
    email: string
    password: string
  }
}
