import * as path from 'path';
import * as fs from 'fs';

export interface LoggerOptions {
  prefix?: string;
  isDev?: boolean;
}

const loadConfig = (): LoggerOptions => {
  const configPath = path.resolve(process.cwd(), 'conlg.config.js');
  if (fs.existsSync(configPath)) {
    return require(configPath);
  }
  return {};
};

const configOptions = loadConfig();

const defaultOptions: LoggerOptions = {
  prefix: '',
  isDev: process.env.NODE_ENV === 'development',
  ...configOptions,
};

export const createLogger = (options: LoggerOptions = {}) => {
  const { prefix, isDev } = { ...defaultOptions, ...options };

  return (...args: any[]) => {
    if (isDev) {
      console.log(prefix, ...args);
    }
  };
};

export const clg = createLogger();
