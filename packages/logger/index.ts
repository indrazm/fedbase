import { pino } from "pino";

export class Logger {
  logger: pino.Logger;

  constructor() {
    this.logger = pino({
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    });
  }

  info(msg: string, ...args: any[]) {
    this.logger.info(msg, ...args);
  }

  error(msg: string, error: Error, ...args: any[]) {
    this.logger.error(msg, error, ...args);
  }

  debug(msg: string, ...args: any[]) {
    this.logger.debug(msg, ...args);
  }

  warn(msg: string, ...args: any[]) {
    this.logger.warn(msg, ...args);
  }

  fatal(msg: string, ...args: any[]) {
    this.logger.fatal(msg, ...args);
  }

  trace(msg: string, ...args: any[]) {
    this.logger.trace(msg, ...args);
  }

  child(options: pino.LoggerOptions) {
    return this.logger.child(options);
  }
}
