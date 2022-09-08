import questionRepository from '../repositories/questionRepository'
import { IQuestions } from '../types/questionTypes'

async function create(data: IQuestions) {
  return await questionRepository.create(data)
}

async function getAll() {
  const questions = await questionRepository.getAll()

  return { questions }
}

async function getById(id: number) {
  return questionRepository.getById(id)
}

export default { create, getAll, getById }
