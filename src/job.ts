import { TaskArgs } from "./schemas";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function task(args: TaskArgs): Promise<void> {
  console.log(`[thread ${args.id}]start task, message: ${args.message}`);

  await sleep(1000);

  console.log(`[thread ${args.id}]finish task`);
}
