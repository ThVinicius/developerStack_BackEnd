import { prisma } from '../config/database'
import { IAnswwers } from '../types/answerTypes'

async function create(data: IAnswwers) {
  return await prisma.answers.create({ data })
}

export default { create }
