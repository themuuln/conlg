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
      const loggedArgs = Array.isArray(args) && args.length === 1 && typeof args[0] === 'object' ? JSON.stringify(args[0], null, 4) : args;
      console.log(prefix, loggedArgs);
    }
  };
};

export const clg = createLogger();
