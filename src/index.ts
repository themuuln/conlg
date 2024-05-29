const isDev = process.env.NODE_ENV === 'development';

export const clg = (...args: any[]) => {
  if (isDev) {
    console.log(...args);
  }
};
