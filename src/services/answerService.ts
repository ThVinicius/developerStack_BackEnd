import answerRepository from '../repositories/answerRepository'
import { IAnswwers } from '../types/answerTypes'

async function create(data: IAnswwers) {
  return await answerRepository.create(data)
}

export default { create }
