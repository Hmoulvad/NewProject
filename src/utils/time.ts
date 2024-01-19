export const seconds = (seconds: number) => 1000 * seconds;

export const minutes = (minutes: number) => 1000 * 60 * minutes;

export const hours = (hours: number) => 1000 * 60 * 60 * hours;

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
