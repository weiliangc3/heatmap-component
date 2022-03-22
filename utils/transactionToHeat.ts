/* eslint-disable no-param-reassign */
import { Heat } from './interfaces/Heat';
import { Transaction } from './interfaces/Transactions';

export default function transactionToHeat(transactions: Array<Transaction>) {
  const finalHeat = transactions.reduce((heat: Heat, transaction: Transaction) => {
    const isCredit = transaction.transactionType === 'success';

    if (!heat[transaction.date]) {
      heat[transaction.date] = 0;
    }

    heat[transaction.date] = isCredit ? transaction.amount : -transaction.amount;

    return heat;
  }, {});

  return finalHeat;
}
