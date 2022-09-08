import { answers } from '@prisma/client'

export type IAnswwers = Omit<answers, 'id'>
