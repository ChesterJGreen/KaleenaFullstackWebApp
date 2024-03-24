import { logger } from '../utils/Logger'
import { sanitizer } from '../utils/Sanitize'
import { api } from './AxiosService'

class EmailsService {
  async createEmail(rawEmail) {
    try {
      await api.post('api/emails', rawEmail)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const emailsService = new EmailsService()
