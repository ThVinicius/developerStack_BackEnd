import { prisma } from '../config/database'
import { IQuestions } from '../types/questionTypes'

async function create(data: IQuestions) {
  return await prisma.questions.create({ data })
}

async function getAll() {
  return await prisma.questions.findMany()
}

async function getById(id: number) {
  return await prisma.questions.findUnique({
    where: { id },
    select: {
      id: true,
      askedBy: true,
      question: true,
      answers: { select: { answeredBy: true, answer: true } }
    }
  })
}

export default { create, getAll, getById }
