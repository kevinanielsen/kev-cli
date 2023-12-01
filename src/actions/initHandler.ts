import nextInit from "./optionHandlers/nextInit";
import nodeInit from "./optionHandlers/nodeInit";
import viteInit from "./optionHandlers/viteInit";

export function initHandler(
  name: string,
  options: { vite: boolean; git: boolean; node: boolean; next: boolean }
) {
  if (options.vite) {
    viteInit(name, options.git);
    return;
  }
  if (options.node) {
    nodeInit(name, options.git);
    return;
  }
  if (options.next) {
    nextInit(name, options.git);
    return;
  }
  nodeInit(name, options.git);
  return;
}
