import * as nodeBase from "../bases/node-lts-tsconfig.json";
import nodeInit from "./optionHandlers/nodeInit";
import viteInit from "./optionHandlers/viteInit";

export function initHandler(
  name: string,
  options: { vite: boolean; git: boolean }
) {
  if (options.vite) {
    viteInit(name, options.git);
    return;
  }
  nodeInit(name, options.git);
}
