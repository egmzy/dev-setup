import inquirer from "inquirer";
import { setupProject } from "./copier.js";
import { logger } from "./logger.js";

function setupCommands(program) {
  program
    .name("dev-setup")
    .description("CLI to setup predefined projects")
    .version("1.0.0")
    .action(async () => {
      try {
        const answers = await inquirer.prompt([
          {
            type: "list",
            name: "projectType",
            message: "What project would you like to set up?",
            choices: [
              { name: "React Project", value: "react" },
              { name: "NestJS Project", value: "nest" },
            ],
          },
        ]);
        await setupProject(answers.projectType);
      } catch (error) {
        logger.error("Error during project setup: ", error);
        throw error;
      }
    });
}

export default setupCommands;
