import { SignInUsecase } from '@domain/usecases/users/sign-in.usecase'
import { FirebaseService } from '@infrastructure/services/auth/firebase/firebase.service'

export const makeSignInUsecaseFactory = (): SignInUsecase => {
  const authService = new FirebaseService(String(process.env.FIREBASE_API_KEY))
  return new SignInUsecase(authService)
}
