interface LoggerOptions {
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
      console.log(prefix, ...args);
    }
  };
};

// Default logger
export const clg = createLogger();
