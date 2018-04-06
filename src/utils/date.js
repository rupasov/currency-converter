import { subDays, eachDayOfInterval, format } from 'date-fns';

const getInitialDays = () =>
  eachDayOfInterval({
    start: new Date(subDays(new Date(), 30)),
    end: new Date()
  });

export const getDays = () =>
  getInitialDays().map(day => format(new Date(day), 'YYYY-MM-DD'));
