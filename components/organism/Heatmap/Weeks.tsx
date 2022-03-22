import React, { FunctionComponent, useContext } from 'react';
import TransactionContext from '../../../utils/context/TransactionContext';
import Day from './Day';
import { Week } from './helperComponents';

const Weeks: FunctionComponent = () => {
  const { dateParameters } = useContext(TransactionContext);
  const numberOfWeeks = dateParameters.weeks || 0;
  const weeks = [];

  for (let i = 0; i < numberOfWeeks; i += 1) {
    weeks.push(
      <Week key={`week${i}`}>
        <Day weekNumber={i} day={0} />
        <Day weekNumber={i} day={1} />
        <Day weekNumber={i} day={2} />
        <Day weekNumber={i} day={3} />
        <Day weekNumber={i} day={4} />
        <Day weekNumber={i} day={5} />
        <Day weekNumber={i} day={6} />
      </Week>,
    );
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { weeks }
    </>
  );
};

export default Weeks;
