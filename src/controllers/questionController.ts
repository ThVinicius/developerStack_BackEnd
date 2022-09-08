import { Request, Response } from 'express'
import questionService from '../services/questionService'
import answerService from '../services/answerService'

export async function createQuestion(req: Request, res: Response) {
  const question = await questionService.create(req.body)

  return res.status(201).send(question)
}

export async function createAnswer(req: Request, res: Response) {
  const questionId = Number(req.params.id)

  req.body.questionId = questionId

  const answer = await answerService.create(req.body)

  return res.status(201).send(answer)
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAll()

  return res.status(200).send(questions)
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id)

  const question = await questionService.getById(id)

  return res.status(200).send(question)
}
