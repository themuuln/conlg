export interface LoggerOptions {
  isDev?: boolean;
}

const defaultOptions: LoggerOptions = {
  isDev: process.env.NODE_ENV === 'development',
};

export const createLogger = (options: LoggerOptions = {}) => {
  const { isDev } = { ...defaultOptions, ...options };

  return (...args: any[]) => {
    if (isDev) {
      const newArgs = args.map((arg) => {
        if (typeof arg === 'object') {
          return JSON.stringify(arg, null, 2);
        }
        return arg;
      });
      console.log(...newArgs);
    }
  };
};

export const clg = createLogger();
