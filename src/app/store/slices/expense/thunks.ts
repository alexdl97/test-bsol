import IncomeExpense from '@/app/common/models/IncomeExpense.model'
import { startLoading, stopLoading } from './expenseSlice'
import SaveIncomeExpense from '@/app/common/service/IncomeExpense.service';

export const saveExpense = (data: IncomeExpense) => {
    return async (dispatch, getState) => {
        dispatch(startLoading());
        await SaveIncomeExpense(data);
        dispatch(stopLoading());
    }
}