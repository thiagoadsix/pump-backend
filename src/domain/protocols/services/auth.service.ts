import { User } from '@domain/entities/user'

export interface AuthService {
  signUp: (input: AuthService.Input) => Promise<User>
  signIn: (input: AuthService.Input) => Promise<User>
  signOut: () => Promise<void>
}

export namespace AuthService {
  export interface Input {
    name: string
    email: string
    password: string
  }
}
