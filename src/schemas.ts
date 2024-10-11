import { z } from "zod";

export const cliOptsSchema = z.object({
  number: z.number().positive(),
});
export type CliOpts = z.infer<typeof cliOptsSchema>;

export const taskArgsSchema = z.object({
  id: z.number(),
  message: z.string(),
});
export type TaskArgs = z.infer<typeof taskArgsSchema>;
