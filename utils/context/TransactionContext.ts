import { createContext } from 'react';
import { getDateParameters } from '../dateManipulation';
import { DateParameters } from '../interfaces/DateParameters';
import { Heat } from '../interfaces/Heat';
import { Transaction } from '../interfaces/Transactions';
import transactionToHeat from '../transactionToHeat';

const defaultTransactionContext: TransactionContextInterface = {
  heat: {},
  transactions: [],
  dateParameters: {},
};

const TransactionContext = createContext(defaultTransactionContext);

export default TransactionContext;

export interface TransactionContextInterface {
  heat: Heat,
  transactions: Array<Transaction>,
  dateParameters: DateParameters,
}

export function createDefaultContextFromTransactions(
  transactions: Array<Transaction>,
) :TransactionContextInterface {
  return {
    heat: transactionToHeat(transactions),
    transactions,
    dateParameters: getDateParameters(transactions),
  };
}
