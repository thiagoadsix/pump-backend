import { CreateUserUsecase } from '@domain/usecases/users/create-user.usecase'
import { FirebaseService } from '@infrastructure/services/auth/firebase/firebase.service'

export const makeCreateUserUsecaseFactory = (): CreateUserUsecase => {
  const authService = new FirebaseService(String(process.env.FIREBASE_API_KEY))
  return new CreateUserUsecase(authService)
}
