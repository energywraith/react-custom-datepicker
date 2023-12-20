const weekDays = {
  Monday: '',
  Tuesday: '',
  Wednesday: '',
  Thursday: '',
  Friday: '',
  Saturday: '',
  Sunday: '',
}

const months = {
  January: '',
  February: '',
  March: '',
  April: '',
  May: '',
  June: '',
  July: '',
  August: '',
  September: '',
  October: '',
  November: '',
  December: '',
}

export type TWeekDays = typeof weekDays
export type TWeekDay = keyof TWeekDays

export type TMonths = typeof months
export type TMonth = keyof TMonths
