#!/usr/bin/env node

import { program } from "commander";
import setupCommands from "../lib/cli.js";
import { handleError } from "../lib/logger.js";

setupCommands(program);

program.parseAsync(process.argv).catch(handleError);
