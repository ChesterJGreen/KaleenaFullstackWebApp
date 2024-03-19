import { AppState } from '../AppState'
import { Email } from '../models/Email'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class EmailsService {
  async createEmail(rawEmail) {
    try {
      const res = await api.post('/api/emails', rawEmail)
      AppState.email = new Email(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const emailsService = new EmailsService()
