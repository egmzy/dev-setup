import winston from "winston";
import chalk from "chalk";
import ora from "ora";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
    winston.format.simple()
  ),
  transports: [new winston.transports.Console()],
});

export function handleError(error) {
  console.error(chalk.red("An error occurred:"), error);
  process.exit(1);
}

export function showSuccess(message) {
  const spinner = ora().succeed(chalk.green(message));
}

export function showFailure(message) {
  const spinner = ora().fail(chalk.red(message));
}
