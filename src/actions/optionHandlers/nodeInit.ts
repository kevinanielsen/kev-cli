import fs from "fs";
import { execSync } from "child_process";
import * as nodeBase from "../../bases/node-lts-tsconfig.json";
import generatePackageJson from "../../bases/packageJsonGenerator";
import gitInit from "./gitInit";

const nodeInit = (name: string, git: boolean) => {
  console.log("Initializing Node Project");
  fs.mkdir(name, { recursive: true }, (err) => {
    console.error(err);
  });
  fs.writeFileSync(
    `./${name}/package.json`,
    JSON.stringify(generatePackageJson(name), null, 2),
  );
  fs.writeFileSync(
    `./${name}/tsconfig.json`,
    JSON.stringify(nodeBase, null, 2),
  );
  fs.mkdirSync(`./${name}/src`);
  fs.mkdirSync(`./${name}/test`);
  fs.mkdirSync(`./${name}/dist`);
  fs.writeFileSync(`./${name}/src/index.ts`, "console.log('Hello World!')");
  execSync(`{
    cd ${name}
    pnpm i
  } &> /dev/null`);
  console.log("Node Project Created");
  if (git) {
    gitInit(name);
  }
  console.log(
    "----------------------------------------------------------------",
  );
  console.log(`To continue developing, run \n   cd ${name} \n   pnpm dev \n`);
};

export default nodeInit;
