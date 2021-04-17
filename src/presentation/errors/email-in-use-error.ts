export class EmailInUSeError extends Error {
  constructor () {
    super('The received email is already on use')
    this.name = 'EmailInUSeError'
  }
}
