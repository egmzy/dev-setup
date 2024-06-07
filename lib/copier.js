import { dirname } from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";
import { resolve, join } from "path";
import { showSuccess, showFailure } from "./logger.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { mkdir, access, readdir, copyFile } = fs;

async function setupProject(projectType) {
  const projectPath = resolve(process.cwd(), projectType);
  const templatePath = resolve(__dirname, "../templates", projectType);

  try {
    await recursiveCopy(templatePath, projectPath);
    showSuccess("Project setup complete!");
  } catch (error) {
    showFailure("Failed to set up project");
    throw error;
  }
}

async function recursiveCopy(src, dest) {
  await access(dest, fs.constants.F_OK).catch(async () => {
    await mkdir(dest, { recursive: true });
  });

  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await recursiveCopy(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath).catch((error) => {
        throw new Error(`Failed to copy ${srcPath}: ${error.message}`);
      });
    }
  }
}

export { setupProject };
