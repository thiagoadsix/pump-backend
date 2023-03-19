import { SignUpUsecase } from '@domain/usecases/users/sign-up.usecase'
import { FirebaseService } from '@infrastructure/services/auth/firebase/firebase.service'

export const makeSignUpUsecaseFactory = (): SignUpUsecase => {
  const authService = new FirebaseService(String(process.env.FIREBASE_API_KEY))
  return new SignUpUsecase(authService)
}
