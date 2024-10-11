import { isMainThread, Worker, workerData } from "node:worker_threads";

import { Option, program } from "commander";
import { cliOptsSchema, taskArgsSchema } from "./schemas";
import { task } from "./job";

if (isMainThread) {
  program
    .name("example-app")
    .description("app with threading")
    .addOption(
      new Option("-n --number <number", "number of jobs").default(100)
        .argParser(parseFloat),
    );
  program.parse();

  const opts = cliOptsSchema.parse(program.opts());
  // console.debug(opts);

  const jobs = [...Array(opts.number).keys()].map((i) => {
    const worker = new Worker(import.meta.filename, {
      workerData: taskArgsSchema.parse({
        id: i,
        message: `It is ${(new Date()).toISOString()}`,
      }),
    });
    return new Promise((r) => worker.on("exit", r));
  });

  await Promise.all(jobs);

  console.log("finished all jobs");
} else {
  const taskArgs = taskArgsSchema.parse(workerData);
  await task(taskArgs);
}
