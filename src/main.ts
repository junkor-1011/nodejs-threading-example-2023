import { isMainThread } from "node:worker_threads";

import { Option, program } from "commander";

if (isMainThread) {
  program
    .name("example-app")
    .description("app with threading")
    .addOption(
      new Option("-n --number <number", "number of jobs").default(100)
        .argParser(parseFloat),
    );
  program.parse();

  const opts = program.opts(); // todo: schema validation
  console.debug(opts);
} else {
  console.debug("[threading] todo: implementation");
}
