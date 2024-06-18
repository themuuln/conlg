export interface LoggerOptions {
  prefix?: string;
  isDev?: boolean;
}

const defaultOptions: LoggerOptions = {
  prefix: '',
  isDev: process.env.NODE_ENV === 'development',
};

export const createLogger = (options: LoggerOptions = {}) => {
  const { prefix, isDev } = { ...defaultOptions, ...options };

  return (...args: any[]) => {
    if (isDev) {
      const loggedArgs = args.length === 1 && typeof args[0] === 'string' ? args[0] : args;
      console.log(prefix, ...loggedArgs);
    }
  };
};

export const clg = createLogger();
