# conlg

A lightweight and customizable logger utility for JavaScript/TypeScript applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [LoggerOptions](#loggeroptions)
  - [createLogger](#createlogger)
  - [clg](#clg)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install conlg
```

Or using yarn:

```bash
yarn add conlg
```

## Usage

### Basic Usage

Import and use the logger in your project:

```typescript
import { clg, createLogger } from 'conlg';

// Using the default logger
clg('This is a log message');

// Creating a custom logger
const customLogger = createLogger({ prefix: '[Custom Logger]', isDev: true });
customLogger('This is a custom log message');
```

### Environment-based Logging

The default logger will only output logs if `NODE_ENV` is set to `'development'`.

```typescript
process.env.NODE_ENV = 'development';
clg('This message will be logged');

process.env.NODE_ENV = 'production';
clg('This message will not be logged');
```

## API

### LoggerOptions

An interface defining the configuration options for the logger.

```typescript
interface LoggerOptions {
  prefix?: string;
  isDev?: boolean;
}
```

- `prefix` (optional): A string to prefix each log message with.
- `isDev` (optional): A boolean to indicate if logging is enabled. Defaults to `true` if `NODE_ENV` is `'development'`.

### createLogger

Creates a new logger function with the specified options.

```typescript
const logger = createLogger(options?: LoggerOptions);
```

- `options` (optional): An object adhering to the `LoggerOptions` interface.

**Example:**

```typescript
const customLogger = createLogger({ prefix: '[App]', isDev: true });
customLogger('This is a log message');
```

### clg

A default logger instance created with the default options.

**Example:**

```typescript
clg('This is a default log message');
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
