import { format, createLogger, transports, addColors } from 'winston';
import config from './config';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const levelToLog = () => {
  if (config.environment === 'development') {
    return 'debug';
  }
  return 'warn';
};

const colours = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

addColors(colours);

const formatStyle = format.combine(
  format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss:ms',
  }),
  format.printf(
    (info) =>
      `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`
  )
);

const transportTypes = [
  new transports.Console({
    format: format.combine(formatStyle, format.colorize({ all: true })),
  }),
  new transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new transports.File({ filename: 'logs/trace.log' }),
];

const logger = createLogger({
  level: levelToLog(),
  levels,
  format: formatStyle,
  transports: transportTypes,
});

export default logger;
