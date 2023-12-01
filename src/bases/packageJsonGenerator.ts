const generatePackageJson = (name: string) => {
  return {
    name: name,
    version: "0.0.1",
    description:
      "Node project generated with the @kevinanielsen/kev-cli npm package",
    main: "./dist/index.js",
    scripts: {
      test: "vitest run",
      lint: "tsc",
      dev: "tsc --watch",
    },
    keywords: [],
    author: "",
    license: "ISC",
    devDependencies: {
      vitest: "^0.34.6",
      typescript: "^5.3.2",
      "@types/node": "^14.14.17",
    },
  };
};

export default generatePackageJson;
