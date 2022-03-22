import React, { FunctionComponent } from 'react';
import TransactionContext, { createDefaultContextFromTransactions } from '../../../utils/context/TransactionContext';
import { Transaction } from '../../../utils/interfaces/Transactions';
import { WeekContainer } from './helperComponents';
import Weeks from './Weeks';

const Heatmap: FunctionComponent<Props> = ({ transactions }: Props) => (
  <TransactionContext.Provider value={createDefaultContextFromTransactions(transactions)}>
    <WeekContainer>
      <Weeks />
    </WeekContainer>
  </TransactionContext.Provider>
);

export default Heatmap;

interface Props{
  transactions: Array<Transaction>
}

Heatmap.defaultProps = {};
