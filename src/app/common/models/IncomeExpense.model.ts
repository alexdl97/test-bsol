export default interface IncomeExpense {
  id: number
  userId: number
  detailType: string
  type: 'ingreso' | 'gasto'
  amount: number
  description: string
  date: any
}
