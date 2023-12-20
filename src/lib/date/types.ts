const weekDays = {
  Monday: '',
  Tuesday: '',
  Wednesday: '',
  Thursday: '',
  Friday: '',
  Saturday: '',
  Sunday: '',
}

export type TWeekDays = typeof weekDays

export type TWeekDay = keyof TWeekDays
