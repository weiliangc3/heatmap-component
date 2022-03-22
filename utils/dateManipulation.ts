/* eslint-disable no-param-reassign */
import { DateParameters } from './interfaces/DateParameters';
import { Transaction } from './interfaces/Transactions';

function getSundayOfWeek(date: Date) :Date {
  const sunday = date.getDate() - date.getDay();
  return new Date(date.setDate(sunday));
}

function countWeeks(date1: any, date2: any) {
  if (!date1 || !date2) return 0;
  return Math.ceil((date2 - date1) / (7 * 24 * 60 * 60 * 1000));
}

// eslint-disable-next-line import/prefer-default-export
export function getDateParameters(transactions: Array<Transaction>) {
  const dateParameters = transactions.reduce((finalValue: DateParameters, transaction) => {
    const date = new Date(transaction.date);

    // earliest date is sunday of first week to render
    if (!finalValue.earliestDate || !finalValue.lastDate) {
      finalValue.earliestDate = date;
      finalValue.lastDate = date;
      finalValue.weeks = 0;
    } else {
      if (finalValue.earliestDate > date) {
        finalValue.earliestDate = date;
      }
      if (finalValue.lastDate < date) {
        finalValue.lastDate = date;
      }
    }
    return finalValue;
  }, {});

  const { earliestDate, lastDate } = dateParameters;

  dateParameters.firstSunday = getSundayOfWeek(earliestDate as Date);
  dateParameters.weeks = countWeeks(earliestDate as Date, lastDate as Date);

  return dateParameters;
}
