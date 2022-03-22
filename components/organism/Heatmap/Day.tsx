import React, { FunctionComponent, useContext } from 'react';
import TransactionContext from '../../../utils/context/TransactionContext';
import { DayContainer } from './helperComponents';

const Day: FunctionComponent<Props> = ({ weekNumber, day }: Props) => {
  const { heat, dateParameters } = useContext(TransactionContext);
  let colour = '#BBB';

  const date = new Date(dateParameters.firstSunday as Date);
  date.setDate(date.getDate() + (weekNumber * 7 + day));
  const dateKey = date.toISOString().split('T')[0];
  const dailyTransaction = heat[dateKey];

  const colourExtent = Math.min(Math.max(dailyTransaction, -500), 500);
  if (colourExtent > 0) {
    const greenPercent = Math.round((colourExtent / 500) * 255);
    colour = `rgb(0, ${greenPercent}, 0)`;
  } else if (colourExtent < 0) {
    const redPercent = Math.round((-colourExtent / 500) * 255);
    colour = `rgb(${redPercent}, 0, 0)`;
  }

  return (
    <DayContainer colour={colour} />
  );

  return (
    <DayContainer colour={colour} />
  );
};

export default Day;

interface Props{
  weekNumber: number,
  day: number
}

Day.defaultProps = {};
