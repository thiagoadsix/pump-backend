import { User } from '@domain/entities/user'
import { AuthService } from '@domain/protocols/services/auth.service'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, Auth } from 'firebase/auth'

export class FirebaseService implements AuthService {
  private readonly firebase: FirebaseApp
  private readonly auth: Auth

  constructor (firebaseApiKey: string) {
    this.firebase = initializeApp({ apiKey: firebaseApiKey })
    this.auth = getAuth(this.firebase)
  }

  async signUp (input: AuthService.Input): Promise<User> {
    const result = await createUserWithEmailAndPassword(this.auth, input.email, input.password)
    await updateProfile(result.user, { displayName: input.name })
    const user = new User(result.user.uid, input.name, input.email, result.user.emailVerified, result.user.metadata.creationTime ?? '', result.user.metadata.creationTime ?? '')
    return user
  }

  async signIn (input: AuthService.SignInInput): Promise<User> {
    const result = await signInWithEmailAndPassword(this.auth, input.email, input.password)
    const user = new User(result.user.uid, result.user.displayName!, input.email, result.user.emailVerified, result.user.metadata.creationTime ?? '', result.user.metadata.creationTime ?? '')
    return user
  }

  async signOut (): Promise<void> {
    return await signOut(this.auth)
  }
}
