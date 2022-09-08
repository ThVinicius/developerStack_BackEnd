import { questions } from '@prisma/client'

export type IQuestions = Omit<questions, 'id'>
