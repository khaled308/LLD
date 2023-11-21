interface ILogger {
  log(msg: string): void;
}

interface ILoggerFactory {
  create(): ILogger;
}

class InfoLogger implements ILogger {
  log(msg: string): void {
    console.log(msg);
  }
}

class DebugLogger implements ILogger {
  log(msg: string): void {
    console.log(msg);
  }
}

class ErrorLogger implements ILogger {
  log(msg: string): void {
    console.log(msg);
  }
}

class InfoLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new InfoLogger();
  }
}

class ErrorLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new ErrorLogger();
  }
}

class DebugLoggerFactory implements ILoggerFactory {
  create(): ILogger {
    return new DebugLogger();
  }
}

export { InfoLoggerFactory, ErrorLoggerFactory, DebugLoggerFactory };
