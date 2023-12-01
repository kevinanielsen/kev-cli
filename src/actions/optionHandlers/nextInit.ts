import fs from "fs";
import { execSync } from "child_process";
import gitInit from "./gitInit";

const nextInit = (name: string, git: boolean) => {
  console.log("Initializing Next Project");
  fs.mkdir(name, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
  execSync(`pnpm create next-app ${name} --ts --tailwind --eslint --app --src-dir --import-alias @ --use-pnpm &> /dev/null`, {
    stdio: "inherit",
  });
  execSync(
    `{
    cd ${name} 
    pnpm i
  } &> /dev/null`,
    {
      stdio: "inherit",
    },
  );

  console.log("Next Project Created");

  if (git) {
    gitInit(name, true);
  }

  console.log(
    "----------------------------------------------------------------",
  );
  console.log(
    `To continue developing, run \n   cd ${name} \n   pnpm dev \n`,
  );
};

export default nextInit;
