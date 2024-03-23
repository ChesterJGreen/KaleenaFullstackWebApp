import { AppState } from '../AppState'
import { Email } from '../models/Email'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class EmailsService {
  async createEmail(rawEmail) {
    try {
      console.log(rawEmail)
      await api.post('api/emails', rawEmail)
      AppState.email = {}
      console.log(AppState.email)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const emailsService = new EmailsService()
