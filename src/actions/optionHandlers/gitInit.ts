import { execSync } from "child_process";
import fs from "fs";

const gitInit = (name: string, vite?: boolean) => {
  console.log("Initializing Git");
  execSync(
    `{
      cd ${name} && git init . 
      git branch -m main
      git add .
      git commit -m "Initial commit"
    } &> /dev/null`
  );
  if (!vite) {
    fs.writeFileSync(`./${name}/.gitignore`, "node_modules\n");
  }
  console.log("Git Initialized");
};

export default gitInit;
