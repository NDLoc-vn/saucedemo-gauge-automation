export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

function timestamp() {
  return new Date().toISOString();
}

export class Logger {
  static info(message: string) {
    console.log(`[${timestamp()}] [INFO] ${message}`);
  }

  static warn(message: string) {
    console.log(`[${timestamp()}] [WARN] ${message}`);
  }

  static error(message: string) {
    console.log(`[${timestamp()}] [ERROR] ${message}`);
  }

  static step(stepName: string) {
    console.log(`\n➡️  [STEP] ${stepName}`);
  }

  static action(action: string) {
    console.log(`   ↳ ${action}`);
  }
}
