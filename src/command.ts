import { Command } from "commander";
import { initHandler } from "./actions/initHandler";

export const program = new Command();

program.version("0.0.1");

program.name("kev");

program
  .command("init")
  .description(
    "Initializes a new project. \nIf no options are provided, a blank node project will be created."
  )
  .argument("<project-name>")
  .option("-n, --node", "use node as the base", false)
  .option("-x, --next", "use next.js as the base", false)
  .option("-v, --vite", "use vite as the base", false)
  .option("-g, --git", "initialize git", false)
  .action(initHandler);
