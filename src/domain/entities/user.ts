export class User {
  id: string
  name: string
  email: string
  verified: boolean
  lastLogin: string
  createdAt: string
  session: { }

  constructor (id: string, name: string, email: string, verified: boolean, lastLogin: string, createdAt: string) {
    this.id = id
    this.name = name
    this.email = email
    this.verified = verified
    this.lastLogin = lastLogin
    this.createdAt = createdAt
  }
}
