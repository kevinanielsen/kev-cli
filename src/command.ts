import { Command } from "commander";
import { initHandler } from "./actions/initHandler";

export const program = new Command();

program.version("0.0.1");

program.name("kev");

program
  .command("init")
  .argument("<project-name>")
  .option("-v, --vite", "use vite as the base", false)
  .action(initHandler);
