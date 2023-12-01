import fs from "fs";
import { execSync } from "child_process";
import gitInit from "./gitInit";

const viteInit = (name: string, git: boolean) => {
  console.log("Initializing Vite Project");
  fs.mkdir(name, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
  execSync(`pnpm create vite ${name} --template react-ts &> /dev/null`, {
    stdio: "inherit",
  });
  fs.opendir(name, async (err, files) => {
    if (err) {
      console.error(err);
    } else {
      execSync(
        `{
        cd ${name} 
        pnpm i
      } &> /dev/null`,
        {
          stdio: "inherit",
        },
      );

      console.log("Vite Project Created");

      if (git) {
        gitInit(name, true);
      }

      console.log(
        "----------------------------------------------------------------",
      );
      console.log(
        `To continue developing, run \n   cd ${name} \n   pnpm dev \n`,
      );
    }
  });
};

export default viteInit;
