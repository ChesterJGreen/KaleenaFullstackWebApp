export class Email {
    constructor(data) {
        this.id = data.id
        this.email = data.email
        this.name = data.name
        this.isValidated = data.isValidated
        this.unsubscribe = data.unsubscribe
        // TODO add additional properties if needed
    }
  }
  