
const changeDir = ['next','prev'] as const

export type ChangeDir = typeof changeDir[number]
