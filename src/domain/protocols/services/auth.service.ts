import { User } from '@domain/entities/user'

export interface AuthService {
  signUp: (input: AuthService.Input) => Promise<User>
  signIn: (input: AuthService.SignInInput) => Promise<User>
  signOut: () => Promise<void>
}

export namespace AuthService {
  export interface Input {
    name: string
    email: string
    password: string
  }

  export interface SignInInput {
    email: string
    password: string
  }
}
